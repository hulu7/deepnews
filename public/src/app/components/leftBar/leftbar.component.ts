import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { pathNameCatalogsMap } from "../../const/common-variables";
import { PageService } from '../../servcies/pageService';

@Component({
  selector: 'app-left-bar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  public buttonStatus:any;
  constructor(
      private router: Router,
      private pageService: PageService) {
    this.updateButtonStatus('');
  }

  ngOnInit() {
    this.updateButtonStatus(pathNameCatalogsMap[window.location.pathname]);
  }

  public goHome(): void {
    this.pageService.setIsHome(true);
    this.router.navigateByUrl('');
  }

  public selectTechnology(): void {
    this.pageService.setIsHome(false);
    this.router.navigateByUrl('technology');
  }

  public selectFinance(): void {
    this.pageService.setIsHome(false);
    this.router.navigateByUrl('finance');
  }

  public selectHouse(): void {
    this.pageService.setIsHome(false);
    this.router.navigateByUrl('house');
  }

  public selectCar(): void {
    this.pageService.setIsHome(false);
    this.router.navigateByUrl('car');
  }

  public selectCulture(): void {
    this.pageService.setIsHome(false);
    this.router.navigateByUrl('culture');
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
