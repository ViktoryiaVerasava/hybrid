import { SizeModel } from "../../model/size-model";

export class SizeController {
    public static $inject: Array<string> = ["SizeModel"];

    onSelect: (string) => any;
    selectedSize: string;

    constructor(public sizeModel: SizeModel) {
    }

    handleSelect(): void {
        this.onSelect({ selectedSize: this.selectedSize });
    }

}