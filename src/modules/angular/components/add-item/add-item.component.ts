import { Component, ViewEncapsulation, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Item } from "../../model/item.model";
import * as ItemActions from "../../actions/item.actions";

interface AppState {
  item: Item;
  cityName: string;
}

@Component({
  selector: "add-item",
  template: require("./add-item.tpl.html"),
  encapsulation: ViewEncapsulation.None
})

export class AddItemComponent implements OnInit {

  public item$: Observable<Item>;
  public cityName$: Observable<string>;
  protected newItem: any;
  private categories: String[];

  constructor(private store: Store<AppState>) {
    this.item$ = this.store.select("item");
    this.cityName$ = this.store.select("cityName");
    this.categories = ["Red", "Gray", "Blue"];
  }

  public ngOnInit(): void {
    this.newItem = {};
  }

  public addNewItem(): void {
    this.store.dispatch(new ItemActions.EditAll(
      {
        "name": this.newItem.name,
        "category": this.newItem.category,
        "content": this.newItem.content
      } as Item
    ));
  }

  public editName(): void {
    this.store.dispatch(new ItemActions.EditName(this.newItem.name));
  }
  public changeCategory(): void {
    this.store.dispatch(new ItemActions.ChangeCategory(this.newItem.category));
  }
  public editContent(): void {
    this.store.dispatch(new ItemActions.EditContent(this.newItem.content));
  }
  public reset(): void {
    this.store.dispatch(new ItemActions.Reset(""));
  }

}
