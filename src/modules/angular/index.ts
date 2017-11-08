import * as angular from "angular";

import { MainComponent } from "./components/main/main.component";
import { SizeComponent } from "./components/size/size.component";
import { SizeModel } from "./model/size-model";

angular.module("app.ng1", [])
  .service("SizeModel", SizeModel)
  .component("main", new MainComponent())
  .component("size", new SizeComponent());

