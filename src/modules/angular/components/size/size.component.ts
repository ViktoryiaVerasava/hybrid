import { SizeController } from "./size.controller";


export class SizeComponent implements ng.IComponentOptions {

    constructor() {
    }

    public controller: any = SizeController;
    public template: any = require("./size.tpl.html");

}
