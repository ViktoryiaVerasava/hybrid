import * as angular from "angular";

import { MainComponent } from "./components/main/main.component";
import { SizeComponent } from "./components/size/size.component";
import { SizeModel } from "./model/size-model";
import { StoreService } from "./services/store.service";

angular.module("app.ng1", [])
  .service("SizeModel", SizeModel)
  .service("StoreService", StoreService)
  .component("main", new MainComponent())
  .component("size", new SizeComponent());

