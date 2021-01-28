import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Basic '+btoa('user:password')
    })

}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries() {
    return this.http.get("/server/api/countries/all", httpOptions)
  }

  addCountry(country) {
    return this.http.post("/server/api/countries", country, httpOptions)
  }

  getCountryByCode(code:string) {
    return this.http.get("server/api/countries/"+code, httpOptions)
  }
}
