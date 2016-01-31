import {Component, OnInit} from 'angular2/core';
import {Hero}              from './hero';
import {HeroService}       from './hero.service';

@Component({
  selector: 'hero-list',
  template: `
  <h3>Heroes</h3>
  <div class="heroes list-group" style="max-height:300px;overflow-y:scroll;overflow-x:hidden;" watch-update>
    <div *ngFor="#hero of heroes">
      <div class="list-group-item">
        <div class="row-action-primary">
          <i class="material-icons">accessibility</i>
        </div>
        <div class="row-content">
          <div class="least-content">{{ hero.id }}</div>
          <h4 class="list-group-item-heading">{{ hero.name }}</h4>
        </div>
      </div>
      <div class="list-group-separator"></div>
    </div>
  </div>

  <div class="well col-md-12">
    <form class="form-horizontal">
      <fieldset>
        <legend>New Hero</legend>
        <div class="col-md-12">
          <div class="form-group">
            <input #newHero class="form-control" placeholder="Name"/>
          </div>
          <div class="form-group">
            <a type="button" class="btn btn-raised btn-inverse" (click)="addHero(newHero.value); newHero.value=''">
              Add
            </a>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  `,
})
export class HeroListComponent implements OnInit {

  constructor (private _heroService: HeroService) {}

  heroes:Hero[];

  ngOnInit() {
    this._heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error => alert(`Server error. Try again later`));
  }

  addHero (name: string) {
    if (!name) {return;}
    this._heroService.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error => alert(error));
    var height = 0;
    $('.heroes div').each(function(i, value){
      height += parseInt($(this).height());
    });
    height += '';

    $('.heroes').animate({scrollTop: height}, 300);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/