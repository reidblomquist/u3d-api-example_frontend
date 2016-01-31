System.register(['angular2/core', './rgba.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rgba_service_1;
    var BackgroundAdjustComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rgba_service_1_1) {
                rgba_service_1 = rgba_service_1_1;
            }],
        execute: function() {
            BackgroundAdjustComponent = (function () {
                function BackgroundAdjustComponent(_rgbaService) {
                    this._rgbaService = _rgbaService;
                }
                BackgroundAdjustComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._rgbaService.getRgba()
                        .subscribe(function (rgba) { return _this.rgba = rgba; }, function (error) { return alert("Server error. Try again later"); });
                    this.initColorPicker();
                };
                BackgroundAdjustComponent.prototype.initColorPicker = function () {
                    $('.bg-colorpicker').colorpicker();
                };
                BackgroundAdjustComponent.prototype.changeColor = function () {
                    var color = $('.bg-colorpicker').data('colorpicker').color.toRGB();
                    this.updateRgba(color.r, color.g, color.b, color.a);
                };
                BackgroundAdjustComponent.prototype.updateRgba = function (R, G, B, A) {
                    var _this = this;
                    if (R == null || G == null || B == null || A == null) {
                        return;
                    }
                    this._rgbaService.updateRgba(R, G, B, A)
                        .subscribe(function (rgba) { return _this.rgba; }, function (error) { return alert(error); });
                };
                BackgroundAdjustComponent = __decorate([
                    core_1.Component({
                        selector: 'background-adjust-colorpicker',
                        template: "\n  <div class=\"well col-md-12\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>Background Color</legend>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <div class=\"col-md-4\">\n              <input type=\"text\" class=\"form-control bg-colorpicker\" value=\"rgba(255,255,255,1)\"/>\n            </div>\n            <div class=\"col-md-2\">\n              <a class=\"btn btn-raised btn-warning\" (click)=\"changeColor();\">Update</a>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [rgba_service_1.RgbaService])
                ], BackgroundAdjustComponent);
                return BackgroundAdjustComponent;
            })();
            exports_1("BackgroundAdjustComponent", BackgroundAdjustComponent);
        }
    }
});
//# sourceMappingURL=background-adjust.component.js.map