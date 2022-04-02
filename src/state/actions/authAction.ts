import { ActionTypes } from "../types/types";
import { IUser } from "../../interfaces/User";

interface LoginAction {
  type: ActionTypes.AUTHLOGIN;
  payLoad: {
    user: IUser | null;
  };
}

interface LogoutAction {
  type: ActionTypes.AUTHLOGOUT;
}

export interface LoadingAction {
  type: ActionTypes.AUTHLOADING;
  payload: boolean;
}

export type AuthActionTypes = LoginAction | LogoutAction | LoadingAction;
