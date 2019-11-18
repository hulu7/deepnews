import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ComplainComponent } from './components/complain/complain.component';
import { TechnologyComponent } from "./components/technologyComponent/technologyComponent.component";
import { FinanceComponent } from "./components/financeComponent/financeComponent.component";
import { HouseComponent } from "./components/houseComponent/houseComponent.component";
import { CarComponent } from "./components/carComponent/carComponent.component";
import { CultureComponent } from "./components/cultureComponent/cultureComponent.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'house', component: HouseComponent },
  { path: 'car', component: CarComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'complain', component: ComplainComponent }
];

export const routing = RouterModule.forRoot(routes);
