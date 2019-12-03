import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'car-content',
  templateUrl: './carComponent.component.html',
  styleUrls: ['./carComponent.component.scss'],
  providers: [DatePipe]
})

export class CarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
