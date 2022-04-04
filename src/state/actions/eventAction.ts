import { CalendarData } from "../../interfaces/Calendar";
import { ActionTypes } from "../types/types";
interface ISelectEventAction {
  type: ActionTypes.EVENTSELECTED;
  payload: CalendarData | null;
}

export interface IEventLoadingAction {
  type: ActionTypes.EVENTLOADING;
  payload: boolean;
}

interface IAddEventAction {
  type: ActionTypes.EVENTADD;
  payload: CalendarData;
}

interface IListEventAction {
  type: ActionTypes.EVENTLIST;
  payload: CalendarData[];
}

interface IEditEventAction {
  type: ActionTypes.EVENTEDIT;
  payload: CalendarData;
}

export type EventActionTypes =
  | ISelectEventAction
  | IEventLoadingAction
  | IAddEventAction
  | IListEventAction
  | IEditEventAction;
