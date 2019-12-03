import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { catalogs, pathNameCatalogsMap} from "../../const/common-variables";
import { ListContentService } from "../../servcies/listContentService";
import { PageService } from "../../servcies/pageService";


@Component({
  selector: 'app-article',
  templateUrl: './articleContent.component.html',
  styleUrls: ['./articleContent.component.scss'],
  providers: [DatePipe]
})

export class ArticleContentComponent implements OnInit, OnDestroy {
  @ViewChildren("articlesList") articlesList: QueryList<ElementRef>;

  private destroy$: Subject<boolean> = new Subject();

  public currentCatalog: string;
  public articles = [];

  private cache: Array<any>;
  public isLoading = false;
  private numberOfItems = 10;
  private page = 1;

  constructor(private datePipe: DatePipe,
              private listContentService: ListContentService,
              private pageService: PageService) {
  }

  ngAfterViewInit() {
    this.articlesList.changes.subscribe(() => {
      if (this.articlesList && this.articlesList.last) {
        this.articlesList.last.nativeElement.focus();
      }
    });
  }

  ngOnInit() {
    // this.loadArticles(this.page).subscribe();
    this.pageService.getCurrentPath$
      .pipe(takeUntil(this.destroy$))
      .subscribe((path) => {
          this.cache = [];
          this.articles = [];
          this.page = 1;
          this.currentCatalog = catalogs[pathNameCatalogsMap['/' + path]].label;
          this.loadMoreArticles();
      },
        error => {
        console.log(error);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private loadArticles(page: number): Observable<any> {
    this.isLoading = true;
    return this.listContentService.getArticles(page, this.numberOfItems, this.currentCatalog)
      .pipe(takeUntil(this.destroy$))
      .pipe(
        map((resp: any) => {
          let articles = resp.result.docs;
          if (articles.length === 0) {
            this.isLoading = false;
            return;
          }
          this.updateShowItems(articles);
          articles.forEach(article => {
            this.articles.push(article);
          });
          this.isLoading = false;
          this.page += 1;
        })
      )
  }

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

  public loadMoreArticles(): void {
    this.loadArticles(this.page).subscribe();
  }
}
