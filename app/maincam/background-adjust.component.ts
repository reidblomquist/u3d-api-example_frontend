import {Component, OnInit, AfterViewChecked} from 'angular2/core';
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
            <div class="col-md-4">
              <input type="text" class="form-control bg-colorpicker" *ngIf="rgba" value="rgba({{rgba.R}},{{rgba.G}},{{rgba.B}},{{rgba.A}})"/>
            </div>
            <div class="col-md-2">
              <a class="btn btn-raised btn-warning" (click)="changeColor();">Update</a>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `,
})
export class BackgroundAdjustComponent implements OnInit, AfterViewChecked {

  constructor (private _rgbaService: RgbaService) {}

  rgba:Rgba;

  ngOnInit() {
    this._rgbaService.getRgba()
        .subscribe(
            rgba => this.rgba = rgba,
            error => alert(`Server error. Try again later`));
  }

  ngAfterViewChecked() {
    this.initColorPicker();
  }

  initColorPicker() {
    $('.bg-colorpicker').colorpicker({format: 'rgba'});
  }

  changeColor() {
    var color = $('.bg-colorpicker').data('colorpicker').color.toRGB();
    this.updateRgba( color.r, color.g, color.b, color.a  );
  }

  updateRgba (R: number, G: number, B: number, A: number) {
    if (R == null || G == null || B == null || A == null) {
      return;
    }
    this._rgbaService.updateRgba(R, G, B, A)
        .subscribe(
            rgba  => this.rgba,
            error => alert(error));
  }
}