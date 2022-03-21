import moment from "moment";
import { CalendarData } from "../../interfaces/Calendar";

interface CalendarEventProps {
  event: CalendarData;
}

export const CalendarEvent = ({ event }: CalendarEventProps) => {
  return (
    <div
      style={{
        backgroundColor: "#0a1929",
        color: "#fff",
        borderRadius: "5px",
      }}
      className=" p-2"
    >
      <p className="fs-5 m-0">
        {event.title.length > 16
          ? event.title.substring(0, 16) + "..."
          : event.title}
      </p>
      <span className="m-0">
        {event.user.name} - {moment(event.start).format("DD/MM/YYYY")}
      </span>
    </div>
  );
};
