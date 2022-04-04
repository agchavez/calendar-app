import moment from "moment";
import { CalendarData } from "../interfaces/Calendar";

export const prepareEvents = (events: CalendarData[]): CalendarData[] => {
  return events.map((event) => {
    return {
      ...event,
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
    };
  });
};
