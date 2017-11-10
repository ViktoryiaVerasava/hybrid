import { Action } from "@ngrx/store";

export const SELECT: string = "[Size] Change size";
export const RESET: string = "[Size] Reset";

export class Select implements Action {
    public readonly type: string = SELECT;
    constructor(public payload: string) { }
}

export type All
    = Select;