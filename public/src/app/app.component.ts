import { Component } from '@angular/core';

import { ApiService } from './servcies';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/hulu7/Angular2-Webpack';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
