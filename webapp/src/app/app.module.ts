import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleContentComponent } from "./components/articleContent/articleContent.component";
import { CarComponent } from "./components/carComponent/carComponent.component";
import { CultureComponent } from "./components/cultureComponent/cultureComponent.component";
import { FinanceComponent } from "./components/financeComponent/financeComponent.component";
import { HouseComponent } from "./components/houseComponent/houseComponent.component";
import { TechnologyComponent } from "./components/technologyComponent/technologyComponent.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";

import { AppRoutingModule } from './app-routing.module';

import { ListContentService } from "./servcies/listContentService";
import { PageService } from "./servcies/pageService";
import { SearchService } from "./servcies/searchService";
import { TimeService } from "./servcies/timeService";

@NgModule({
  declarations: [
    AppComponent,
    ArticleContentComponent,
    CarComponent,
    CultureComponent,
    FinanceComponent,
    HeaderComponent,
    HomeComponent,
    HouseComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ListContentService,
    PageService,
    SearchService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
