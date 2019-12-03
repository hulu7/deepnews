import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private timer: any;
  constructor() {}

  ngOnInit() {
    // this.timer = setInterval(() => {
    //     console.log('1');
    //   }, 2000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
