import { CalendarData } from "../../interfaces/Calendar";
import { ActionTypes } from "../types/types";
interface ISelectEventAction {
  type: ActionTypes.EVENTSELECTED;
  payload: CalendarData | null;
}

export type EventActionTypes = ISelectEventAction;
