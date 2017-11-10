import * as SizeActions from "./../actions/size.actions";

export type Action = SizeActions.All;

const defaultState: string = "not selected";

export function sizeReducer(state: string = defaultState, action: Action): any {

    switch (action.type) {

        case SizeActions.SELECT:
            return action.payload;

        default:
            return state;
    }

}