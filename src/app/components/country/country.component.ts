import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries;

  constructor(private countrySvc:CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countrySvc.getCountries().subscribe(
      data => {this.countries = data},
      err => {console.error(err)},
      () => {
        console.log("All countries loaded successfully")
      }
    );
  }

}
