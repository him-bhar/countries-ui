import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  countryType: string[] = [
    'Developed',
    'Developing'
  ];
  countryForm : FormGroup;
  validMessage : string = "";

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      alpha2Code: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.countryForm.valid) {
      this.validMessage = "Country added successfully"
      this.countryService.addCountry(this.countryForm.value).subscribe(
        data => {
          this.countryForm.reset();
          return true;
        },
        error => {
          return console.error(error);
        }
      )
    } else {
      this.validMessage = "Please fill form before submitting"
    }
  }

}
