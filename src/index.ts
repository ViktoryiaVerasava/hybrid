import "./polyfills.ts";
import * as angular from "angular";
import { downgradeInjectable } from "@angular/upgrade/static";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

import { downgradeComponent } from "@angular/upgrade/static";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { CityComponent } from "./components/city/city.component";
import { StoreService } from "./services/store.service";

import { MainComponent } from "./components/main/main.component";
import { SizeComponent } from "./components/size/size.component";
import { SizeModel } from "./model/size-model";

angular.module("app", ["app.ng1", "ng2"]);
angular.module("ng2", [])
    .directive("addItem",
    downgradeComponent({ component: AddItemComponent }))
    .directive("city",
    downgradeComponent({ component: CityComponent }))
    .service("StoreService", downgradeInjectable(StoreService));
angular.module("app.ng1", [])
    .service("SizeModel", SizeModel)
    .service("StoreService", StoreService)
    .component("main", new MainComponent())
    .component("size", new SizeComponent());

platformBrowserDynamic().bootstrapModule(AppModule);
