import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

interface AppState {
  cityName: string;
}

@Component({
  selector: "city",
  template: require("./city.tpl.html"),
  encapsulation: ViewEncapsulation.None
})

export class CityComponent implements OnInit {

  public city$: Observable<string>;

  private cities: [string];
  private selectedCity: string;

  constructor(private store: Store<AppState>) {
    this.city$ = this.store.select("cityName");
  }

  public ngOnInit(): void {
    this.cities = ["Minsk", "Moscow"];
    this.selectedCity = "Minsk";
  }

  public toggle(value: string): void {
    this.store.dispatch({ type: value.toUpperCase() });
  }

}
