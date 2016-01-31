import {Component, AfterViewInit}         from 'angular2/core';

@Component({
  selector: 'material',
  template: ''
})

export class MaterialComponent implements AfterViewInit {
  ngAfterViewInit() {
    $.material.init();
  }
}