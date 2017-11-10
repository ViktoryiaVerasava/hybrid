import { SizeModel } from "../../model/size-model";
import { StoreService } from "../../services/store.service";

export class SizeController {

    public static $inject: any = ["SizeModel", "StoreService"];

    private selectedSize: string;

    constructor(public sizeModel: SizeModel, public storeService: StoreService) {
    }

    public handleSelect(): void {
        this.storeService.selectSize(this.selectedSize);
    }

}