import { ActionTypes } from "../types/types";
import { IUser } from "../../interfaces/User";

interface LoginAction {
  type: ActionTypes.AUTHLOGIN;
  payLoad: {
    user: IUser;
  };
}

interface LogoutAction {
  type: ActionTypes.AUTHLOGOUT;
}

export type AuthActionTypes = LoginAction | LogoutAction;
