import { Injectable } from "@angular/core";
import { Item } from "./../model/item.model";
import * as SizeActions from "./../actions/size.actions";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

interface AppState {
    item: Item;
    cityName: string;
    size: string;
}

@Injectable()
export class StoreService {

    public item$: Observable<Item>;
    public cityName$: Observable<string>;
    public size$: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.item$ = this.store.select("item");
        this.cityName$ = this.store.select("cityName");
        this.size$ = this.store.select("size");
    }

    public selectSize(value: string): void {
        this.store.dispatch(new SizeActions.Select(value));
    }

}