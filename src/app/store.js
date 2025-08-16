import {configureStore} from "@reduxjs/toolkit";
import balance from "../features/account/balanceSlice.js";
import quote from "../features/quot/quoteSlice.js";

export const store = configureStore({
    reducer: {
        balance, quote
    },
})