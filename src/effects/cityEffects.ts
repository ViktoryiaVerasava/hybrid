import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as CityActions from "./../actions/city.actions";

@Injectable()
export class CityEffects {

  private countryByCapital: Map<string, string> = new Map([["Moscow", "Russia"], ["Minsk", "Belarus"]]);

  constructor(private actions$: Actions) { }

  @Effect()
  public selectCity$: Observable<Action> =
  this.actions$
    .ofType(CityActions.SELECT_CITY)
    .map(toPayload)
    .switchMap(data => {
      return Observable.of(
        {
          type: CityActions.GET_COUNTRY_BY_CAPITAL,
          payload: `${data} (${this.countryByCapital.get(data)})`
        }
      );
    });


}