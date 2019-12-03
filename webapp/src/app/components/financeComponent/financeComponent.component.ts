import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'finance-content',
  templateUrl: './financeComponent.component.html',
  styleUrls: ['./financeComponent.component.scss'],
  providers: [DatePipe]
})

export class FinanceComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
