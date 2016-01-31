import {Component, AfterViewChecked}         from 'angular2/core';

@Component({
  selector: 'material',
  template: ''
})

export class MaterialComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    $.material.init();
  }
}