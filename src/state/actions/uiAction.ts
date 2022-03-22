import { ActionTypes } from "../types/types";
interface IModalAction {
  type: ActionTypes.UIMODALOPEN | ActionTypes.UIMODALCLOSE;
  payload: {
    open: boolean;
  };
}

export type UiActionTypes = IModalAction;
