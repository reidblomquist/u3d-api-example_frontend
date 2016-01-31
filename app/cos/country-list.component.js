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
                    this.goToLastCountry();
                };
                CountryListComponent.prototype.goToLastCountry = function () {
                    var height = 0;
                    $('.countries div').each(function (i, value) {
                        height += parseInt($(this).height());
                    });
                    height += $('.heroes div').first().height();
                    height += '';
                    $('.countries').animate({ scrollTop: height }, 3000);
                };
                CountryListComponent = __decorate([
                    core_1.Component({
                        selector: 'country-list',
                        template: "\n  <h3>Countries:</h3>\n  <div class=\"countries list-group\" style=\"max-height:300px;overflow-y:scroll;overflow-x:hidden;\">\n    <div *ngFor=\"#country of countries\">\n      <div class=\"list-group-item\">\n        <div class=\"row-action-primary\">\n          <i class=\"material-icons\">language</i>\n        </div>\n        <div class=\"row-content\">\n          <div class=\"least-content\">{{ country.Code }}</div>\n          <h4 class=\"list-group-item-heading\">{{ country.Name }}</h4>\n        </div>\n      </div>\n      <div class=\"list-group-separator\"></div>\n    </div>\n  </div>\n\n  <div class=\"well col-md-12\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>New Country</legend>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <input #countryName class=\"form-control\" placeholder=\"Name\"/>\n          </div>\n          <div class=\"form-group\">\n            <input #countryCode class=\"form-control\" placeholder=\"Code\"/>\n          </div>\n          <div class=\"form-group\">\n            <a type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"addCountry(countryName.value, countryCode.value); countryName.value=''; countryCode.value=''\">\n              Add\n            </a>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  ",
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