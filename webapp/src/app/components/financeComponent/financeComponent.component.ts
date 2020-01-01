import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { fromEvent } from "rxjs";

@Component({
  selector: 'finance-content',
  templateUrl: './financeComponent.component.html',
  styleUrls: ['./financeComponent.component.scss'],
  providers: [DatePipe]
})

export class FinanceComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    fromEvent(window, 'reload').subscribe((event) => {
      console.log('refresh');
    })
  }
}
