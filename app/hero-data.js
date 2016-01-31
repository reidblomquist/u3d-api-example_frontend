System.register([], function(exports_1) {
    var HeroData;
    return {
        setters:[],
        execute: function() {
            HeroData = (function () {
                function HeroData() {
                }
                HeroData.prototype.createDb = function () {
                    var heroes = [
                        { "id": "1", "name": "Windstorm" },
                        { "id": "2", "name": "Bombasto" },
                        { "id": "3", "name": "Magneta" },
                        { "id": "4", "name": "Tornado" }
                    ];
                    return { heroes: heroes };
                };
                return HeroData;
            })();
            exports_1("HeroData", HeroData);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-data.js.map