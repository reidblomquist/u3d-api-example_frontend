import {View, Component, OnInit} from 'angular2/core';
import {Country}              from './country';
import {CountryService}       from './country.service';

@Component({
  selector: 'country-list',
})
@View({
  template: `
  <h3>Countries:</h3>
  <ul>
    <li *ngFor="#country of countries">
      {{ country.Name }}
      {{ country.Code }}
    </li>
  </ul>
  <h3>New Country:</h3>

  <form class="form-horizontal col-md-6">
    <fieldset>
      <div class="form-group">
        <input #countryName class="form-control" placeholder="Name"/>
      </div>
      <div class="form-group">
        <input #countryCode class="form-control" placeholder="Code"/>
      </div>
      <div class="form-group">
        <a type="button" class="btn btn-raised btn-primary" (click)="addCountry(countryName.value, countryCode.value); countryName.value=''; countryCode.value=''">
          Add Country
        </a>
      </div>
    </fieldset>
  </form>
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