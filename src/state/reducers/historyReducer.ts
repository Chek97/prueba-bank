import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

const initialState: object[] = [];

const historyReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GETHISTORY:
            return action.payload;
        case ActionType.SETDEPOSIT:
            return [...state, action.payload];
        case ActionType.SETWITHDRAW:
            return [...state, action.payload];
        case ActionType.SETAMOUNT:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default historyReducer;