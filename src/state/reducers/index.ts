import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import historyReducer from "./historyReducer";

const reducers = combineReducers({
    bank: bankReducer,
    history: historyReducer
});

export default reducers

export type RootState = ReturnType<typeof reducers>