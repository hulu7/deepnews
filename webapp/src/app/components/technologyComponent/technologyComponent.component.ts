import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'technology-content',
  templateUrl: './technologyComponent.component.html',
  styleUrls: ['./technologyComponent.component.scss'],
  providers: [DatePipe]
})

export class TechnologyComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
