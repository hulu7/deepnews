import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../servcies/searchService";
import {isUndefined} from "util";

@Component({
  selector: 'app-right-bar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {
  private searchKey: string;
  constructor(private searchService: SearchService) {}
  ngOnInit() {}

  public getSearchKey(searchKey: string): void {
    this.searchKey = searchKey;
    this.searchService.setSearchKey(this.searchKey);
  }

  public openSearchPage(): void {
    if (!isUndefined(this.searchKey) && this.searchKey.length > 0) {
      window.open('/search?keyword=' + this.searchKey);
    }
  }
}
