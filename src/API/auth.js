import axios, { syncToken } from "./URL";

export function loginProses(payload) {
    return axios.post("/login",payload)
}

export function registerProses(payload){
    return axios.post("/register",payload)
}

export function resetProses(id, token, payload){
    return axios.post(`/reset-password/${id}/${token}`,payload)
}

export function forgotProses(payload){
    return axios.post("/lupa-password",payload)
}

export function authMeProcess() {
    syncToken()
    return axios.get("/authme");
}