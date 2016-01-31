import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Country}              from './country';
import {CountryListComponent} from './country-list.component';
import {CountryService}       from './country.service';

import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';


@Component({
  selector: 'my-toc',
  template: `
  <div class="navbar navbar-default">
    <div class="col-md-12">
      <h1>Tour of Countries</h1>
    </div>
    <div class="col-md-12">
      <country-list></country-list>
    </div>
  </div>
  `,
  directives:[CountryListComponent],
  providers: [
    HTTP_PROVIDERS,
    CountryService
  ]
})

export class TocComponent { }