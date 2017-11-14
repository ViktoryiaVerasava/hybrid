import { SizeModel } from "../../model/size-model";
import { StoreService } from "../../services/store.service";
import * as SizeActions from "./../../actions/size.actions";

export class SizeController {

    public static $inject: any = ["SizeModel", "StoreService"];

    private selectedSize: string;

    constructor(public sizeModel: SizeModel, public storeService: StoreService) {
    }

    public handleSelect(): void {
        this.storeService.store.dispatch(new SizeActions.SelectInit(this.selectedSize));
    }

}