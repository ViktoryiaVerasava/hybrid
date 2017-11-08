import { ItemModel } from "../../model/item-model";

export class MainController {

    private addedItem: ItemModel;
    private sizeForOrder: string;

    constructor() { }

    public onAdd(item: ItemModel): void {
        this.addedItem = item;
    }

    public onSelect(value): any {
        this.sizeForOrder = value.selectedSize;
        alert("Selected size: " + value.selectedSize);
    }

}