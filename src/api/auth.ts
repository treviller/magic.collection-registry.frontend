import {ApiResponse, DefaultMeta, getApiUrl} from "@/api/backend";
import {Fetcher} from "swr";
import axios from "axios";

type LoginData = {
    username: string,
}

type AuthenticatedMeta = {
    success: boolean,
    access_token: string,
    refresh_token: string
}

export type LoginResponse = ApiResponse<AuthenticatedMeta, LoginData>

export type LoginParameters = {
    login: string,
    password: string
}

export const login: Fetcher<LoginResponse, LoginParameters> = (loginParams) => {
    return axios.post(getApiUrl('/login'), loginParams).then(response => response.data)
}
