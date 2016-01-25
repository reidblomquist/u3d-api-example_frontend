import { Component } from 'angular2/core';
import {Http, Response} from 'angular2/http'

@Component({
  selector: 'home',
  template: `
    <h2>Home</h2>
    <h3>
      <div *ngFor="#country of allCountries.countries">
        {{country}}
      </div>
    </h3>
  `
})

export class Home {

  result: Object;
  http: Http;
  allCountries: any;

  constructor(http: Http) {
    this.http = http;
    this.loadCountries();
  }

  loadCountries(){
    this.allCountries = {};
    this.http.get('http://localhost:8080/countries').toPromise()
      .then((res: Response) => {
        this.allCountries.countries = res.json();
      });
  }
}
