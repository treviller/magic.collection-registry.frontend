import {AnyAction, createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@/store/store";

export interface SearchState {
    term: string | null
}

const initialState: SearchState = {
    term: null
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.term = action.payload
            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.search,
            }
        })
    },
})

export const {setSearchTerm} = searchSlice.actions
export const selectSearchState = (state: AppState) => state.search
export default searchSlice.reducer