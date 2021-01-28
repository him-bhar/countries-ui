import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {
  public country;

  constructor(private countryService:CountryService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountryByCode(this.route.snapshot.paramMap.get("country-code"));
  }

  getCountryByCode(code:string) {
    this.countryService.getCountryByCode(code).subscribe(
      data => {
        this.country = data;
      },
      error => console.error(error),
      () => "Country loaded successfully"
    );
  }

}
