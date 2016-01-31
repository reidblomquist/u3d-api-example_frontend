System.register(['angular2/core', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(_heroService) {
                    this._heroService = _heroService;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return alert("Server error. Try again later"); });
                };
                HeroListComponent.prototype.addHero = function (name) {
                    var _this = this;
                    if (!name) {
                        return;
                    }
                    this._heroService.addHero(name)
                        .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return alert(error); });
                    var height = 0;
                    $('.heroes div').each(function (i, value) {
                        height += parseInt($(this).height());
                    });
                    height += '';
                    $('.heroes').animate({ scrollTop: height }, 300);
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        template: "\n  <h3>Heroes</h3>\n  <div class=\"heroes list-group\" style=\"max-height:300px;overflow-y:scroll;overflow-x:hidden;\" watch-update>\n    <div *ngFor=\"#hero of heroes\">\n      <div class=\"list-group-item\">\n        <div class=\"row-action-primary\">\n          <i class=\"material-icons\">accessibility</i>\n        </div>\n        <div class=\"row-content\">\n          <div class=\"least-content\">{{ hero.id }}</div>\n          <h4 class=\"list-group-item-heading\">{{ hero.name }}</h4>\n        </div>\n      </div>\n      <div class=\"list-group-separator\"></div>\n    </div>\n  </div>\n\n  <div class=\"well col-md-12\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <legend>New Hero</legend>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <input #newHero class=\"form-control\" placeholder=\"Name\"/>\n          </div>\n          <div class=\"form-group\">\n            <a type=\"button\" class=\"btn btn-raised btn-inverse\" (click)=\"addHero(newHero.value); newHero.value=''\">\n              Add\n            </a>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-list.component.js.map