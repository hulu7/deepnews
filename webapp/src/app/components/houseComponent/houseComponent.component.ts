import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'house-content',
  templateUrl: './houseComponent.component.html',
  styleUrls: ['./houseComponent.component.scss'],
  providers: [DatePipe]
})

export class HouseComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
