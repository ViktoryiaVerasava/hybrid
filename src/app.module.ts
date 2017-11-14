import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { CityComponent } from "./components/city/city.component";
import { UpgradeModule } from "@angular/upgrade/static";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { cityReducer } from "./reducers/city.reducer";
import { itemReducer } from "./reducers/item.reducer";
import { sizeReducer } from "./reducers/size.reducer";
import { StoreService } from "./services/store.service";
import { SizeService } from "./services/size.service";
import { EffectsModule } from "@ngrx/effects";
import { SizeEffects } from "./effects/sizeEffects";
import { CityEffects } from "./effects/cityEffects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

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
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        EffectsModule.forRoot([SizeEffects, CityEffects])
    ],
    providers: [
        StoreService,
        SizeService
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    public ngDoBootstrap(): any {
        this.upgrade.bootstrap(document.body, ["app"], { strictDi: true });
    }
}
