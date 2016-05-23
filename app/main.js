System.register(['angular2/platform/browser', 'rxjs/Rx', './maincam/maincam.component', './material.component'], function(exports_1) {
    var browser_1, maincam_component_1, material_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (maincam_component_1_1) {
                maincam_component_1 = maincam_component_1_1;
            },
            function (material_component_1_1) {
                material_component_1 = material_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(maincam_component_1.MaincamComponent);
            browser_1.bootstrap(material_component_1.MaterialComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=main.js.map