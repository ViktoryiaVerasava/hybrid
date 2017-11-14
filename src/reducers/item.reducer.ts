import * as ItemActions from "./../actions/item.actions";
import { Item } from "../model/item.model";

export type Action = ItemActions.All;

const defaultState: Item = {
    name: "not specified",
    category: "not specified",
    content: "not specified"
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function itemReducer(state: Item = defaultState, action: Action): any {

    switch (action.type) {

        case ItemActions.EDIT_NAME:
            return newState(state, { name: action.payload });

        case ItemActions.CHANGE_CATEGORY:
            return newState(state, { category: action.payload });

        case ItemActions.EDIT_CONTENT:
            return newState(state, { content: action.payload });

        case ItemActions.RESET:
            return defaultState;

        case ItemActions.EDIT_ALL:
            return newState(state, {
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content
            });

        default:
            return state;
    }

}