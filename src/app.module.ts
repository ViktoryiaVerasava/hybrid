import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddItemComponent } from "./modules/angular/components/add-item/add-item.component";
import { CityComponent } from "./modules/angular/components/city/city.component";
import { UpgradeModule } from "@angular/upgrade/static";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { cityReducer } from "./modules/angular/reducers/city.reducer";
import { itemReducer } from "./modules/angular/reducers/item.reducer";
import { sizeReducer } from "./modules/angular/reducers/size.reducer";
import { StoreService } from "./modules/angular/services/store.service";


@NgModule({
    declarations: [
        AddItemComponent,
        CityComponent
    ],
    entryComponents: [
        AddItemComponent,
        CityComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        FormsModule,
        StoreModule.forRoot({
            cityName: cityReducer,
            item: itemReducer,
            size: sizeReducer
        })
    ],
    providers: [
        StoreService
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    public ngDoBootstrap(): any {
        this.upgrade.bootstrap(document.body, ["app"], { strictDi: true });
    }
}
