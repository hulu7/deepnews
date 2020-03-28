import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PageService } from "../../servcies/pageService";
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})

export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject();

  public isHomePage: boolean;
  public date: string;

  constructor(private router: Router,
              private pageService: PageService) {
    this.pageService.isHome$
        .pipe(takeUntil(this.destroy$))
        .subscribe((location: boolean) => {
      this.isHomePage = location;
    });
  }

  ngOnInit() {
    if (window.location.pathname !== '/') {
      this.isHomePage = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public goToComplainPage(): void {
    this.isHomePage = false;
    this.router.navigateByUrl('/complain');
  }

  public goToHomePage(): void {
    this.isHomePage = true;
    this.router.navigateByUrl('');
  }

  public openSearchBox(): void {
    this.pageService.setIsHome(false);
    window.open('/search?keyword=');
  }
}
