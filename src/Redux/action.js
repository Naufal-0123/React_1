import { authMeProcess, forgotProses, loginProses, registerProses, resetProses } from "../API/auth";
import Cookies from "js-cookie";

export function authMe(payload) {
  return async (dispatch) => {
    try {
      let response = await authMeProcess();
      let data = response.data;
      dispatch({
        type: "login",
        email: data?.user?.email,
        password: data?.user?.password,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await loginProses(payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        password: data?.user?.password,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await registerProses(payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        confirmPass: data?.user?.confirmPass,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authForgot(payload) {
  return async (dispatch) => {
    try {
      let response = await forgotProses(payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        // isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
} 

export function authReset(id, token, payload) {
  return async (dispatch) => {
    try {
      let response = await resetProses(id, token, payload);
      let data = response.data;
      console.log(data);
      dispatch({
        type: "login",
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
