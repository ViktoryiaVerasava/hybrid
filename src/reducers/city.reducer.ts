import * as CityActions from "./../actions/city.actions";

export type Action = CityActions.All;

const defaultState: string = "not selected";

export function cityReducer(state: string = defaultState, action: Action): string {

    switch (action.type) {

        case CityActions.SELECT_CITY:
            return state = action.payload;

        case CityActions.GET_COUNTRY_BY_CAPITAL:
            return state = action.payload;

        default:
            return state;
    }
}
