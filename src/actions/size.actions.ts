import { Action } from "@ngrx/store";

export const SELECT: string = "[Size] Change size";
export const SELECT_INIT: string = "[Size] Select init";

export class Select implements Action {
    public readonly type: string = SELECT;
    constructor(public payload: string) { }
}

export class SelectInit implements Action {
    public readonly type: string = SELECT_INIT;
    constructor(public payload: string) { }
}

export type All
    = Select
    | SelectInit;