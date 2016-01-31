System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MaterialComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MaterialComponent = (function () {
                function MaterialComponent() {
                }
                MaterialComponent.prototype.ngAfterViewChecked = function () {
                    $.material.init();
                    if ($('.slider').length > 0) {
                        $(function () {
                            $.material.init();
                            $(".shor").noUiSlider({
                                start: 0,
                                connect: "lower",
                                range: {
                                    min: 0,
                                    max: 100
                                }
                            });
                            $(".svert").noUiSlider({
                                orientation: "vertical",
                                start: 0,
                                connect: "lower",
                                range: {
                                    min: 0,
                                    max: 100
                                }
                            });
                        });
                    }
                };
                MaterialComponent = __decorate([
                    core_1.Component({
                        selector: 'material',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [])
                ], MaterialComponent);
                return MaterialComponent;
            })();
            exports_1("MaterialComponent", MaterialComponent);
        }
    }
});
//# sourceMappingURL=material.component.js.map