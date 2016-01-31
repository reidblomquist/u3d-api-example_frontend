import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Rgba}              from './rgba';
import {BackgroundAdjustComponent} from './background-adjust.component';
import {RgbaService}       from './rgba.service';

import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';


@Component({
  selector: 'maincam',
  template: `
  <div class="navbar navbar-warning">
    <div class="col-md-12">
      <h1>MainCam</h1>
    </div>
    <div class="col-md-12">
      <background-adjust-colorpicker></background-adjust-colorpicker>
    </div>
  </div>
  `,
  directives:[BackgroundAdjustComponent],
  providers: [
    HTTP_PROVIDERS,
    RgbaService
  ]
})

export class MaincamComponent {
}