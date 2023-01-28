import {Action, AsyncThunkAction, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {searchSlice} from "@/store/searchSlice";
import {createWrapper} from "next-redux-wrapper";
import {authSlice} from "@/store/authSlice";
import {useDispatch} from "react-redux";

const makeStore = () => configureStore({
    reducer: {
        [searchSlice.name]: searchSlice.reducer,
        [authSlice.name]: authSlice.reducer,
    },
    devTools: true
});

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore);