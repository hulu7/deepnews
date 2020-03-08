import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

import { BehaviorSubject, Subject } from 'rxjs';
import { distinct, filter, map, debounceTime, tap, flatMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { isNullOrUndefined } from "util";
import { merge } from 'rxjs/observable/merge';
import { takeUntil } from "rxjs/operators";
import * as _ from 'lodash';

import { ListContentService } from '../../servcies/listContentService';
import { pathNameCatalogsMap } from "../../const/common-variables";


@Component({
  selector: 'list-content',
  templateUrl: './listContent.component.html',
  styleUrls: ['./listContent.component.scss'],
  providers: [DatePipe]
})

export class ListContentComponent implements OnInit {

  public currentCatalog: string;
  private cache: Array<any> = [];
  private destroy$: Subject<boolean> = new Subject();
  private itemHeight = 114;
  public isLoading = false;
  private numberOfItems = 10;
  private pageByManual$ = new BehaviorSubject(1);


  constructor(private listContentService: ListContentService,
              private datePipe: DatePipe) {}

  ngOnInit() {
      this.currentCatalog = pathNameCatalogsMap[window.location.pathname];
  }

  public viewed(article: any): void {
      this.listContentService.putViewedArticle({id: article._id})
          .pipe(takeUntil(this.destroy$))
          .subscribe()
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
            return this.listContentService.getArticles(page, this.numberOfItems, this.currentCatalog)
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
        let images = [];
        if (article.articleCover !== 'images/image.jpg' && !isNullOrUndefined(article.articleCover)) {
            images = article.articleCover.split(",");
            images.forEach(image => {
                if (image === "") {
                    images.splice(images.indexOf(image), 1);
                }
            });
        }
        article.articleCover = [];
        if (images.length > 0) {
            article.isShowImage = true;
            article.articleCover.push(images[0]);
        }  else {
            article.isShowImage = false;
        }
    });
  }
}
