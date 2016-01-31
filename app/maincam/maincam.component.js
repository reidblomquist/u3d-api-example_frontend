System.register(['angular2/core', 'angular2/http', './background-adjust.component', './rgba.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, background_adjust_component_1, rgba_service_1;
    var MaincamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (background_adjust_component_1_1) {
                background_adjust_component_1 = background_adjust_component_1_1;
            },
            function (rgba_service_1_1) {
                rgba_service_1 = rgba_service_1_1;
            }],
        execute: function() {
            MaincamComponent = (function () {
                function MaincamComponent() {
                }
                MaincamComponent = __decorate([
                    core_1.Component({
                        selector: 'maincam',
                        template: "\n  <div class=\"navbar navbar-warning\">\n    <div class=\"col-md-12\">\n      <h1>MainCam</h1>\n    </div>\n    <div class=\"col-md-12\">\n      <background-adjust-colorpicker></background-adjust-colorpicker>\n    </div>\n  </div>\n  ",
                        directives: [background_adjust_component_1.BackgroundAdjustComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            rgba_service_1.RgbaService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MaincamComponent);
                return MaincamComponent;
            })();
            exports_1("MaincamComponent", MaincamComponent);
        }
    }
});
//# sourceMappingURL=maincam.component.js.map