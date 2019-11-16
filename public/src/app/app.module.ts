import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComplainComponent } from './components/complain/complain.component';
import { ContentComponent } from './components/content/content.component';
import { LeftbarComponent } from './components/leftBar/leftbar.component';
import { ListContentComponent } from './components/listContent/listContent.component';
import { ApiService } from './servcies';
import { ListContentService } from './servcies/listContentService';
import { TimeService } from './servcies/timeService';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ComplainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LeftbarComponent,
    ListContentComponent
  ],
  providers: [
    ApiService,
    ListContentService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
