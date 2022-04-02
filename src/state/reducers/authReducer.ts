import { ActionTypes } from "../types/types";
import { IUser } from "../../interfaces/User";
import { AuthActionTypes } from "../actions/authAction";
export interface IAuthState {
  checking?: boolean;
  user: IUser;
  error: any;
  loading: boolean;
}

const initialState: IAuthState = {
  checking: false,
  user: {
    email: "",
    firstName: "",
    lastName: "",
  },
  error: null,
  loading: false,
};

export const authReducer = (
  state: IAuthState = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case ActionTypes.AUTHLOGIN:
      return {
        ...state,
        checking: true,
        user: action.payLoad.user,
      };
    case ActionTypes.AUTHLOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.AUTHLOGOUT:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
