import { Action } from "@ngrx/store";

export function cityReducer(state: string = "not selected", action: Action): any {
    switch (action.type) {
        case "MINSK":
            return state = "Minsk city";
        case "MOSCOW":
            return state = "Moscow city";
        default:
            return state;
    }
}