import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from "./components/carComponent/carComponent.component";
import { ComplainComponent } from './components/complain/complain.component';
import { CultureComponent } from "./components/cultureComponent/cultureComponent.component";
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from "./components/houseComponent/houseComponent.component";
import { FinanceComponent } from "./components/financeComponent/financeComponent.component";
import { SearchComponent } from "./components/searchComponent/searchComponent.component";
import { TechnologyComponent } from "./components/technologyComponent/technologyComponent.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'house', component: HouseComponent },
  { path: 'car', component: CarComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'search', component: SearchComponent },
  { path: 'complain', component: ComplainComponent }
];

export const routing = RouterModule.forRoot(routes);
