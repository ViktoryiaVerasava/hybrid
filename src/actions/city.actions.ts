import { Action } from "@ngrx/store";

export const SELECT_CITY: string = "[City] Select city";
export const GET_COUNTRY_BY_CAPITAL: string = "[City] Get country by capital";

export class SelectCity implements Action {
    public readonly type: string = SELECT_CITY;
    constructor(public payload: string) { }
}
export class GetCountryByCapital implements Action {
    public readonly type: string = GET_COUNTRY_BY_CAPITAL;
    constructor(public payload: string) { }
}

export type All
    = SelectCity
    | GetCountryByCapital;