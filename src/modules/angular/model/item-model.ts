export class ItemModel {

    private _name: string;
    private _category: string;
    private _content: string;

    constructor() {
    }

    set name(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }

    set category(category: string) {
        this._category = category;
    }
    get category(): string {
        return this._category;
    }

    set content(content: string) {
        this._content = content;
    }
    get content(): string {
        return this._content;
    }

}