import { Component, OnInit } from '@angular/core';
import { ListContentService } from '../../servcies/listContentService';

@Component({
  selector: 'list-content',
  templateUrl: './listContent.component.html',
  styleUrls: ['./listContent.component.scss']
})

export class ListContentComponent implements OnInit {
  public articles: Array<any>;
  constructor(private listContentService: ListContentService) {}
  ngOnInit() {
    this.listContentService.getArticles(1, 10, "情感").subscribe(data => {
      this.articles = JSON.parse(data._body).result.docs;
    });
  }
}
