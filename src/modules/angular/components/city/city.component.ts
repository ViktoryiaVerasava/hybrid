import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'city',
  template: require('./city.tpl.html'),
  encapsulation: ViewEncapsulation.None
})

export class CityComponent {

  private cities: [string];
  private selectedCity: string;

  constructor() {
  }

  ngOnInit() {
    this.cities = ['Minsk', 'Moscow'];
    this.selectedCity = 'Minsk';
  }

  public toggle(value: string): void {
    this.selectedCity = value;
    alert("City: " + value);
  }

}
