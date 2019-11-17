import { Component, OnInit } from '@angular/core';
import { ListContentService } from '../../servcies/listContentService';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import {distinct, filter, map, debounceTime, tap, flatMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'list-content',
  templateUrl: './listContent.component.html',
  styleUrls: ['./listContent.component.scss'],
  providers: [DatePipe]
})

export class ListContentComponent implements OnInit {
  private cache: Array<any> = [];
  private itemHeight: number = 114;
  private numberOfItems: number = 10;
  private isLoading: boolean = false;
  private pageByManual$ = new BehaviorSubject(1);

  constructor(private listContentService: ListContentService,
              private datePipe: DatePipe
  ) {}
  ngOnInit() {}

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
            return this.listContentService.getArticles(page, this.numberOfItems, "财经")
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
