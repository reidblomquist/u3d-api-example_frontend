import {Component, OnInit}    from 'angular2/core';
import {Country}              from './country';
import {CountryService}       from './country.service';

@Component({
  selector: 'country-list',
  template: `
  <h3>Countries:</h3>
  <div class="countries list-group" style="max-height:300px;overflow-y:scroll;overflow-x:hidden;" watch-update>
    <div *ngFor="#country of countries">
      <div class="list-group-item">
        <div class="row-action-primary">
          <i class="material-icons">language</i>
        </div>
        <div class="row-content">
          <div class="least-content">{{ country.Code }}</div>
          <h4 class="list-group-item-heading">{{ country.Name }}</h4>
        </div>
      </div>
      <div class="list-group-separator"></div>
    </div>
  </div>

  <div class="well col-md-12">
    <form class="form-horizontal">
      <fieldset>
        <legend>New Country</legend>
        <div class="col-md-12">
          <div class="form-group">
            <input #countryName class="form-control" placeholder="Name"/>
          </div>
          <div class="form-group">
            <input #countryCode class="form-control" placeholder="Code"/>
          </div>
          <div class="form-group">
            <a type="button" class="btn btn-raised btn-primary" (click)="addCountry(countryName.value, countryCode.value); countryName.value=''; countryCode.value=''">
              Add
            </a>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
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

    var height = 0;
    $('.countries div').each(function(i, value){
      height += parseInt($(this).height());
    });
    height += '';

    $('.countries').animate({scrollTop: height}, 300);
  }
}