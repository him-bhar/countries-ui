import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from "./components/country/country.component";
import { ViewCountryComponent } from "./components/view-country/view-country.component";
import {AddCountryComponent} from "./components/add-country/add-country.component";

const routes: Routes = [
  {
    path: '',
    component: CountryComponent
  },
  {
    path: 'country/:country-code',
    component: ViewCountryComponent
  },
  {
    path: 'country',
    component: AddCountryComponent
  }

]; //Routes for the application are defined here.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
