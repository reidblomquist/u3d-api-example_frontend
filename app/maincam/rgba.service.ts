import {Injectable} from 'angular2/core';
import {Http, Headers}       from 'angular2/http';
import {Rgba}       from './rgba';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RgbaService {
  constructor (private http: Http) {}

  private _rgbaUrl = 'http://localhost:8080/rgba';

  getSettings () {
    return this.http.get(this._rgbaUrl)
                    .map(res => <Rgba> res.json())
                    .catch(this.logAndPassOn);
  }

  private logAndPassOn (error: Error) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error);
  }

  updateSettings (R: number, G: number, B: number, A: number) : Observable<Rgba>  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this._rgbaUrl, JSON.stringify({ R, G, B, A }), {headers: headers})
                    .map(res =>  <Rgba> res.json())
                    .catch(this.logAndPassOn)
  }
}