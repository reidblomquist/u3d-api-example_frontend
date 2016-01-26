import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'home',
  template: `
    <h2>Home</h2>
    <h3>
      <div *ngFor="#country of allCountries.countries">
        {{country.Name}}
        {{country.Code}}
      </div>
    </h3>
    <h4>Add yourself a damn country, son</h4>
    <form #f="form" (ng-submit)="postCountry(f.value)">
      <div ng-control-group="countryForm">
          <label for="code">Code</label>
          <input
            type="text"
            id="code"
            ng-control="code"
            required>

          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            ng-control="name"
            required>
      </div>

      <button>Add</button>
    </form>
  `
})

export class Home {

  result: Object;
  http: Http;
  allCountries: any;
  postCountryResponse = new Country();

  constructor(http: Http) {
    this.http = http;
    this.loadCountries();
  }

  loadCountries(){
    this.allCountries = {};
    this.http.get(Api.BASE_URL + '/countries').toPromise()
      .then((res: Response) => {
        this.allCountries.countries = res.json();
      });
  }

  postCountry(){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(Api.BASE_URL + '/countries', JSON.stringify({
          Code: 'US',
          Name: 'United States'
        }), {headers: headers})
        .map((res:Response) => res.json())
        .subscribe((res:Country) => this.postCountryResponse = res);
  }
}

class Country{
  Code:string;
  Name:string;
}

export class Api{
  public static get BASE_URL():string {return "http://localhost:8080"};
}
