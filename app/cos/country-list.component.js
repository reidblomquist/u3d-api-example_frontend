System.register(['angular2/core', './country.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, country_service_1;
    var CountryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            }],
        execute: function() {
            CountryListComponent = (function () {
                function CountryListComponent(_countryService) {
                    this._countryService = _countryService;
                }
                CountryListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._countryService.getCountries()
                        .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return alert("Server error. Try again later"); });
                };
                CountryListComponent.prototype.addCountry = function (Name, Code) {
                    var _this = this;
                    if (!Name || !Code) {
                        return;
                    }
                    this._countryService.addCountry(Name, Code)
                        .subscribe(function (country) { return _this.countries.push(country); }, function (error) { return alert(error); });
                };
                CountryListComponent = __decorate([
                    core_1.Component({
                        selector: 'country-list',
                    }),
                    core_1.View({
                        template: "\n  <h3>Countries:</h3>\n  <ul>\n    <li *ngFor=\"#country of countries\">\n      {{ country.Name }}\n      {{ country.Code }}\n    </li>\n  </ul>\n  <h3>New Country:</h3>\n\n  <form class=\"form-horizontal col-md-6\">\n    <fieldset>\n      <div class=\"form-group\">\n        <input #countryName class=\"form-control\" placeholder=\"Name\"/>\n      </div>\n      <div class=\"form-group\">\n        <input #countryCode class=\"form-control\" placeholder=\"Code\"/>\n      </div>\n      <div class=\"form-group\">\n        <a type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"addCountry(countryName.value, countryCode.value); countryName.value=''; countryCode.value=''\">\n          Add Country\n        </a>\n      </div>\n    </fieldset>\n  </form>\n  ",
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryService])
                ], CountryListComponent);
                return CountryListComponent;
            })();
            exports_1("CountryListComponent", CountryListComponent);
        }
    }
});
//# sourceMappingURL=country-list.component.js.map