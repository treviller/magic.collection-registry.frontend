import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, LoginParameters} from "@/api/auth";
import {AppState} from "@/store/store";

export const authenticateUser = createAsyncThunk('auth/authenticateUsersStatus', async (loginParams: LoginParameters) => {
    return login(loginParams)
})

export interface AuthState {
    accessToken: string | null,
    refreshToken: string | null,
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            state.accessToken = action.payload.meta.access_token
            state.refreshToken = action.payload.meta.refresh_token
        })
    }
})

export const selectAuthState = (state: AppState) => state.auth
export default authSlice.reducer