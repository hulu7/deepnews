import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  public buttonStatus:any;
  constructor() {
    this.updateButtonStatus('');
  }


  ngOnInit() {
  }

  public selectTechnology(): void {
    this.updateButtonStatus('technology');
  }

  public selectFinance(): void {
    this.updateButtonStatus('finance');
  }

  public selectHouse(): void {
    this.updateButtonStatus('house');
  }

  public selectCar(): void {
    this.updateButtonStatus('car');
  }

  public selectCulture(): void {
    this.updateButtonStatus('culture');
  }

  private updateButtonStatus(catagory: string): void {
    this.buttonStatus = {
      technology: false,
      finance: false,
      house: false,
      car: false,
      culture: false
    };
    switch (catagory) {
      case 'technology':
        this.buttonStatus.technology = true;
        break;
      case 'finance':
        this.buttonStatus.finance = true;
        break;
      case 'house':
        this.buttonStatus.house = true;
        break;
      case 'car':
        this.buttonStatus.car = true;
        break;
      case 'culture':
        this.buttonStatus.culture = true;
        break;
      default:
        break
    }
  }
}
