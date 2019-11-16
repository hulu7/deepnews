import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../../servcies/timeService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})

export class HeaderComponent implements OnInit {
  public isHomePage: boolean = true;
  public date: string;
  constructor(private router: Router,
              private timeService: TimeService,
              private datePipe: DatePipe) {
    this.isHomePage = window.location.pathname === '/';
  }

  ngOnInit() {
    this.initDate();
  }

  private initDate(): void {
    this.timeService.getCurrentDate().subscribe(data => {
      let result = JSON.parse(data._body);
      let yyMmDdArray = this.datePipe.transform(result.date,'yyyy-MM-dd').split('-');
      this.date = yyMmDdArray[0] + '年' + yyMmDdArray[1] + '月' + yyMmDdArray[2] + '日'
    })
  }

  public goToComplainPage(): void {
    this.isHomePage = false;
    this.router.navigateByUrl('/complain');
  }

  public goToHomePage(): void {
    this.isHomePage = true;
    this.router.navigateByUrl('');
  }
}
