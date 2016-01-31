import {Component, OnInit} from 'angular2/core';
import {Rgba} from './rgba';
import {RgbaService} from './rgba.service';

@Component({
  selector: 'background-adjust-colorpicker',
  template: `
  <div class="well col-md-12">
    <form class="form-horizontal">
      <fieldset>
        <legend>Background Color</legend>
        <div class="col-md-12">
          <div class="form-group">
            <div class="input-group">
              <input type="text" class="form-control bg-colorpicker" value="rgba(255,255,255,1)"/>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `,
})
export class BackgroundAdjustComponent implements OnInit {

  constructor (private _rgbaService: RgbaService) {}


  ngOnInit() {
    this._rgbaService.getSettings()
        .subscribe(
            settings => this.settings = settings,
            error => alert(`Server error. Try again later`));
    this.initColorPicker();
  }

  initColorPicker() {
    $('.bg-colorpicker').colorpicker();
  }

  changeColor() {
    var color = $('.bg-colorpicker').colorpicker();
    this.updateSettings( color.r, color.g, color.b, color.a  );
  }

  updateSettings (R: number, G: number, B: number, A: number) {
    if (R == null || G == null || B == null || A == null) {
      return;
    }
    this._rgbaService.updateSettings(R, G, B, A)
        .subscribe(
            rgba  => this.settings.push(rgba),
            error => alert(error));
  }
}