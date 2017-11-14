import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SELECT, SELECT_INIT } from "./../actions/size.actions";
import { SizeService } from "./../services/size.service";

@Injectable()
export class SizeEffects {

  constructor(private actions$: Actions, private sizeService: SizeService) { }

  @Effect()
  public selectSize$: Observable<Action> =
  this.actions$
    .ofType(SELECT_INIT)
    .map(toPayload)
    .switchMap(initialValue => {

      return Observable.fromPromise(this.sizeService.getTranslatedValue(initialValue))
        .map(convertedValue => {
          return {
            type: SELECT, payload: {
              message: initialValue + " equals " + convertedValue
            }
          };
        });

    });
}