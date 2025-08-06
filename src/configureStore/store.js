import {createStore} from "../redux/createStore.js";
import {accountReducer} from "../reduser/accountReducer.js";

const initialState = {
    balance: 0,
};

export const store = createStore(accountReducer, initialState);