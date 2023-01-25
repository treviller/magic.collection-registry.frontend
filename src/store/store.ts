import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {searchSlice} from "@/store/searchSlice";
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        [searchSlice.name]: searchSlice.reducer,
    },
    devTools: true
});

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore);