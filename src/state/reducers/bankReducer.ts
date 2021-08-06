import { ActionType } from "../action-types/index";
import { Action } from "../actions";

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        case ActionType.GETDEPOSIT:
            return state + action.payload;
        default:
            return state
    }
}

export default reducer