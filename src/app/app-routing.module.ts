import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from "./components/country/country.component";

const routes: Routes = [
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
