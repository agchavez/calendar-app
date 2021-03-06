import { AppDispatch } from "../store";
import api from "../../utils/api";
import { ActionTypes } from "../types/types";
import { IUser, UserResponse } from "../../interfaces/User";
import { LoadingAction } from "../actions/authAction";
import Swal from "sweetalert2";

type AuthResponse = {
  data: UserResponse | null;
  status: number;
  statusText: string;
};
export const startLogin = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingAuth(true));
    try {
      const response: AuthResponse = await api.post("/auth/login", {
        email,
        password,
      });
      if (response.data?.user) {
        localStorage.setItem("token", response.data.access_token);
        dispatch({
          type: ActionTypes.AUTHLOGIN,
          payLoad: {
            user: response.data.user,
          },
        });
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        Swal.fire({
          icon: error.response.data.active ? "warning" : "error",
          title: "Error",
          text: error.response.data.error,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
        console.log(error);
      }
    }
    dispatch(startLoadingAuth(false));
  };
};

//Crear cuenta
export const startRegister = (user: IUser, formClear: Function) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingAuth(true));
    try {
      const response: AuthResponse = await api.post("/auth/register", user);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully, please check your email",
      });
      formClear();
    } catch (error: any) {
      if (error.response?.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
        console.log(error);
      }
    }
    dispatch(startLoadingAuth(false));
  };
};

//Cerrar sesion
export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: ActionTypes.AUTHLOGOUT,
    });
  };
};

const startLoadingAuth = (status: boolean): LoadingAction => {
  return {
    type: ActionTypes.AUTHLOADING,
    payload: status,
  };
};
