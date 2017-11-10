import { Action } from "@ngrx/store";

export const EDIT_NAME: string = "[Item] Edit name";
export const CHANGE_CATEGORY: string = "[Item] Change category";
export const EDIT_CONTENT: string = "[Item] Edit content";

export const RESET: string = "[Item] Reset";
export const EDIT_ALL: string = "[Item] Edit all";

export class EditName implements Action {
    public readonly type: string = EDIT_NAME;
    constructor(public payload: string) { }
}
export class ChangeCategory implements Action {
    public readonly type: string = CHANGE_CATEGORY;
    constructor(public payload: string) { }
}
export class EditContent implements Action {
    public readonly type: string = EDIT_CONTENT;
    constructor(public payload: string) { }
}
export class Reset implements Action {
    public readonly type: string = RESET;
    constructor(public payload: string) { }
}
export class EditAll implements Action {
    public readonly type: string = EDIT_ALL;
    constructor(public payload: any) { }
}

export type All
    = EditName
    | ChangeCategory
    | EditContent
    | Reset
    | EditAll;