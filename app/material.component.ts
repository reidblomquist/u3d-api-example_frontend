import {Component, AfterViewChecked}         from 'angular2/core';

@Component({
  selector: 'material',
  template: ''
})

export class MaterialComponent implements AfterViewChecked {

  ngAfterViewChecked() {
    $.material.init();
    if ($('.slider').length > 0) {
      $(function () {
        $.material.init();
        $(".shor").noUiSlider({
          start: 0,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });

        $(".svert").noUiSlider({
          orientation: "vertical",
          start: 0,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });
      });
    }
  }
}