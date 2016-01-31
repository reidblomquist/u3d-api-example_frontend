System.register(['angular2/core', 'angular2/common', 'angular2/http', './wikipedia.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, wikipedia_service_1;
    var WikiFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiFormComponent = (function () {
                function WikiFormComponent(_wikipediaService) {
                    this._wikipediaService = _wikipediaService;
                    this.inputs = new common_1.Control();
                }
                WikiFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.items = this.inputs.valueChanges
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._wikipediaService.search(term); });
                };
                WikiFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-wiki-form',
                        template: "\n    <h1>Wikipedia Form Demo</h1>\n    <p><i>Fetches when typing stops</i></p>\n    <input [ngFormControl]=\"inputs\"/>\n    <ul>\n      <li *ngFor=\"#item of items | async\">{{item}}</li>\n    </ul>\n  ",
                        providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiFormComponent);
                return WikiFormComponent;
            })();
            exports_1("WikiFormComponent", WikiFormComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=wiki-form.component.js.map