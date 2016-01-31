System.register(['angular2/platform/browser', 'rxjs/Rx', './toh/toh.component', './cos/toc.component', './material.component'], function(exports_1) {
    var browser_1, toh_component_1, toc_component_1, material_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (toh_component_1_1) {
                toh_component_1 = toh_component_1_1;
            },
            function (toc_component_1_1) {
                toc_component_1 = toc_component_1_1;
            },
            function (material_component_1_1) {
                material_component_1 = material_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(toh_component_1.TohComponent);
            browser_1.bootstrap(toc_component_1.TocComponent);
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