import { Component, OnInit } from '@angular/core';

import { isUndefined } from "util";

import { PageService } from '../../servcies/pageService';
import { SearchService } from "../../servcies/searchService";


@Component({
  selector: 'app-right-bar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {
  private searchKey: string;
  constructor(
      private searchService: SearchService,
      private pageService: PageService) {}
  ngOnInit() {}

  public getSearchKey(searchKey: string): void {
    this.searchKey = searchKey;
    this.searchService.setSearchKey(this.searchKey);
  }

  public openSearchPage(): void {
    if (!isUndefined(this.searchKey) && this.searchKey.length > 0) {
      this.pageService.setIsHome(false);
      window.open('/search?keyword=' + this.searchKey);
    }
  }
}
