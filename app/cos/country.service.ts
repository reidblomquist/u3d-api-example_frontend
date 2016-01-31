import {Injectable} from 'angular2/core';
import {Http, Headers}       from 'angular2/http';
import {Country}       from './country';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountryService {
  constructor (private http: Http) {}

  private _countryUrl = 'http://localhost:8080/countries';

  getCountries () {
    return this.http.get(this._countryUrl)
                    .map(res => <Country[]> res.json())
                    .catch(this.logAndPassOn);
  }

  private logAndPassOn (error: Error) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error);
  }

  addCountry (Name: string, Code: string) : Observable<Country>  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this._countryUrl, JSON.stringify({ Name, Code}), {headers: headers})
                    .map(res =>  <Country> res.json())
                    .catch(this.logAndPassOn)
  }
}