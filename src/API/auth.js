import axios, { syncToken } from "./baseUrl2";

export function loginProses(payload) {
    return axios.post("/login",payload)
}

export function registerProses(payload){
    return axios.post("/register",payload)
}

export function authMeProcess() {
    syncToken()
    return axios.get("/authme");
}