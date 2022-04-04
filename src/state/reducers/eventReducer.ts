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
    case ActionTypes.EVENTLOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.EVENTADD:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case ActionTypes.EVENTLIST:
      return {
        ...state,
        events: [...action.payload],
      };
    case ActionTypes.EVENTEDIT:
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
      };
    default:
      return state;
  }
};
