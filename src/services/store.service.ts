import { Injectable } from "@angular/core";
import { Item } from "./../model/item.model";
import { AppState } from "./../state/app-state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StoreService {

    public item$: Observable<Item> = this.store.select("item");
    public cityName$: Observable<string> = this.store.select("cityName");
    public size$: Observable<string> = this.store.select("size");

    constructor(public store: Store<AppState>) {
    }

}