import { CalendarData } from "../../interfaces/Calendar";
import { ActionTypes } from "../types/types";
import { EventActionTypes } from "../actions/eventAction";

export interface IEventState {
  events: CalendarData[];
  event: CalendarData | null;
  loading: boolean;
  error: any;
}

const initialState: IEventState = {
  events: [],
  event: null,
  loading: false,
  error: null,
};

export const eventReducer = (
  state: IEventState = initialState,
  action: EventActionTypes
): IEventState => {
  switch (action.type) {
    case ActionTypes.EVENTSELECTED:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};
