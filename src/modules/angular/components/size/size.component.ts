import { SizeController } from "./size.controller";

export class SizeComponent implements ng.IComponentOptions {

    public bindings: any;

    constructor() {
        this.bindings = {
            onSelect: '&',
            selectedSize: '<'        
        }
    }

    public controller = SizeController;
    public template = require('./size.tpl.html');

}
