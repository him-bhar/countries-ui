import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from "./services/country.service";
import { HttpClientModule } from "@angular/common/http";
import { CountryComponent } from './components/country/country.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ViewCountryComponent } from './components/view-country/view-country.component';
import { AddCountryComponent } from './components/add-country/add-country.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ViewCountryComponent,
    AddCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
