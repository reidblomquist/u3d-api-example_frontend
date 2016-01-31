System.register(['angular2/core', 'angular2/http', './country-list.component', './country.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, country_list_component_1, country_service_1;
    var TocComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (country_list_component_1_1) {
                country_list_component_1 = country_list_component_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            TocComponent = (function () {
                function TocComponent() {
                }
                TocComponent = __decorate([
                    core_1.Component({
                        selector: 'my-toc',
                        template: "\n  <div class=\"navbar navbar-default\">\n    <div class=\"col-md-12\">\n      <h1>Tour of Countries</h1>\n    </div>\n    <div class=\"col-md-12\">\n      <country-list></country-list>\n    </div>\n  </div>\n  ",
                        directives: [country_list_component_1.CountryListComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            country_service_1.CountryService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TocComponent);
                return TocComponent;
            })();
            exports_1("TocComponent", TocComponent);
        }
    }
});
//# sourceMappingURL=toc.component.js.map