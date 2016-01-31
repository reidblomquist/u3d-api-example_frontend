import {bootstrap}         from 'angular2/platform/browser';

// Add all operators to Observable
import 'rxjs/Rx';

import {TohComponent}      from './toh/toh.component';
import {TocComponent}      from './cos/toc.component';
import {MaterialComponent} from './material.component';

bootstrap(TohComponent);
bootstrap(TocComponent);
bootstrap(MaterialComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/