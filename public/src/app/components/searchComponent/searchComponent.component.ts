import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { SearchService } from "../../servcies/searchService";

@Component({
  selector: 'search-content',
  templateUrl: './searchComponent.component.html',
  styleUrls: ['./searchComponent.component.scss'],
  providers: [DatePipe]
})

export class SearchComponent implements OnInit {
  public searchKey: string;
  constructor(private searchService: SearchService,
              private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.searchKey = params['keyword'];
      this.searchService.SearchKey;
    });
  }
}
