import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ComplainComponent } from './components/complain/complain.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'complain', component: ComplainComponent }
];

export const routing = RouterModule.forRoot(routes);
