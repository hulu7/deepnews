import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'culture-content',
  templateUrl: './cultureComponent.component.html',
  styleUrls: ['./cultureComponent.component.scss'],
  providers: [DatePipe]
})

export class CultureComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
