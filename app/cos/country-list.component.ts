import {Component, OnInit} from 'angular2/core';
import {Country}              from './country';
import {CountryService}       from './country.service';

@Component({
  selector: 'country-list',
  template: `
  <h3>Countries:</h3>
  <ul>
    <li *ngFor="#country of countries">
      {{ country.Name }}
      {{ country.Code }}
    </li>
  </ul>
  New Country:
  <input #countryName />
  <input #countryCode />
  <button (click)="addCountry(countryName.value, countryCode.value); countryName.value=''; countryCode.value=''">
    Add Country
  </button>
  `,
})
export class CountryListComponent implements OnInit {

  constructor (private _countryService: CountryService) {}

  countries:Country[];

  ngOnInit() {
    this._countryService.getCountries()
        .subscribe(
            countries => this.countries = countries,
            error => alert(`Server error. Try again later`));
  }

  addCountry (Name: string, Code: string) {
    if (!Name || !Code) {return;}
    this._countryService.addCountry(Name, Code)
        .subscribe(
            country  => this.countries.push(country),
            error => alert(error));

  }
}