import {Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { SearchService } from "../../servcies/searchService";
import {debounceTime, distinct, filter, flatMap, map, takeUntil, tap} from "rxjs/operators";
import {BehaviorSubject, Subject} from 'rxjs';
import {fromEvent} from "rxjs/observable/fromEvent";
import {merge} from "rxjs/observable/merge";
import * as _ from "lodash";

@Component({
  selector: 'search-content',
  templateUrl: './searchComponent.component.html',
  styleUrls: ['./searchComponent.component.scss'],
  providers: [DatePipe]
})

export class SearchComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();
  private cache: Array<any> = [];
  private itemHeight: number = 80;
  private numberOfItems: number = 10;
  private pageByManual$ = new BehaviorSubject(1);

  public searchKey: string;
  public isLoading = false;
  constructor(private router: Router,
              private searchService: SearchService,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe) {}
  ngOnInit() {
    this.activatedRoute.queryParams
        .pipe(takeUntil(this.destroy$))
        .subscribe((params: Params) => {
      this.searchKey = params['keyword'];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public getSearchKey(key: string): void {
    this.searchKey = key;
  }

  public startSearch(): void {
      if (this.searchKey !== "") {
          this.router.navigateByUrl('/search?keyword=' + this.searchKey).then(() => {
              window.location.reload();
          });
      }
  }

  private pageByScroll$ = fromEvent(window, "scroll")
      .pipe(
          map(() => window.scrollY),
          filter(current => current >= document.body.clientHeight - window.innerHeight),
          debounceTime(200),
          distinct(),
          map(y => Math.ceil((y + window.innerHeight) / (this.itemHeight * this.numberOfItems)))
      );

  private pageByResize$ = fromEvent(window, "resize")
      .pipe(
          debounceTime(200),
          map(_ => Math.ceil(
              (window.innerHeight + document.body.scrollTop) /
              (this.itemHeight * this.numberOfItems)
          ))
      );

  private pageToLoad$ = merge(this.pageByManual$, this.pageByResize$, this.pageByScroll$)
      .pipe(
          distinct(),
          filter(page => this.cache[page - 1] === undefined)
      );

  public articles$ = this.pageToLoad$
      .pipe(
          tap(_ => this.isLoading = true),
          flatMap((page: number) => {
            this.isLoading = true;
            return this.searchService.searchArticles(page, this.numberOfItems, this.searchKey)
                .pipe(
                    map((resp: any) => JSON.parse(resp._body).result.docs),
                    tap((articles:any) => {
                      if (articles.length < this.numberOfItems) {
                        this.isLoading = false;
                      }
                      this.updateShowItems(articles);
                      this.cache[page - 1] = articles;
                      if ((this.itemHeight * this.numberOfItems * page) < window.innerHeight) {
                        this.pageByManual$.next(page + 1)
                      }
                    })
                )
          }),
          map(() => _.flatMap(this.cache))
      );

  private updateShowItems(articles: Array<any>): void {
    if (articles.length === 0) {
      return ;
    }
    articles.forEach(article => {
      let today = this.datePipe.transform(new Date(),'yyyy-MM-dd');
      let published = this.datePipe.transform(article.published,'yyyy-MM-dd');
      let yyMmDdArray = published.split('-');
      article.published= today === published? '今天': yyMmDdArray[0] + '年' + yyMmDdArray[1] + '月' + yyMmDdArray[2] + '日';
    });
  }
}
