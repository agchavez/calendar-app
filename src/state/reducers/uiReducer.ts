import { UiActionTypes } from "../actions/uiAction";
import { ActionTypes } from "../types/types";
export interface IUiState {
  modalOpen: boolean;
  error: any;
  alert: string | null;
}

const initialState: IUiState = {
  modalOpen: false,
  error: null,
  alert: null,
};

export const uiReducer = (
  state = initialState,
  action: UiActionTypes
): IUiState => {
  switch (action.type) {
    case ActionTypes.UIMODALOPEN:
      return {
        ...state,
        modalOpen: true,
      };
    case ActionTypes.UIMODALCLOSE:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
