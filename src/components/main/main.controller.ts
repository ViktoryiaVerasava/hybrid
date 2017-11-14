import { Item } from "../../model/item.model";
import { StoreService } from "../../services/store.service";

export class MainController {

    public static $inject: Array<string> = ["StoreService"];
    public item: Item;
    public cityName: string;
    public size: string;

    constructor(public storeService: StoreService) {
        this.storeService.item$.subscribe((value) => this.item = value);
        this.storeService.cityName$.subscribe((value) => this.cityName = value);
        this.storeService.size$.subscribe((value) => this.size = value);
    }

}