import * as SizeActions from "./../actions/size.actions";

export type Action = SizeActions.All;

const defaultState: string = "not selected";

export function sizeReducer(state: string = defaultState, action: Action): string {

    switch (action.type) {

        case SizeActions.SELECT:
            return state = action.payload;

        default:
            return state;
    }

}