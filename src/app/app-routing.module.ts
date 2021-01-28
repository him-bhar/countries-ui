import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from "./components/country/country.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewCountryComponent } from "./components/view-country/view-country.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:country-code',
    component: ViewCountryComponent
  },
  {
    path: 'country',
    component: CountryComponent
  }

]; //Routes for the application are defined here.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
