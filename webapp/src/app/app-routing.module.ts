import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TechnologyComponent } from "./components/technologyComponent/technologyComponent.component";
import { FinanceComponent } from "./components/financeComponent/financeComponent.component";
import { HouseComponent } from "./components/houseComponent/houseComponent.component";
import { CarComponent } from "./components/carComponent/carComponent.component";
import { CultureComponent } from "./components/cultureComponent/cultureComponent.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tech', component: TechnologyComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'house', component: HouseComponent },
  { path: 'car', component: CarComponent },
  { path: 'culture', component: CultureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
