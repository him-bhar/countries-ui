import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from "./services/country.service";
import { HttpClientModule } from "@angular/common/http";
import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ViewCountryComponent } from './components/view-country/view-country.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    HomeComponent,
    ViewCountryComponent
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
