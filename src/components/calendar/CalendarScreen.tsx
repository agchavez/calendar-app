import { useState } from "react";
import { NavBar } from "../ui/NavBar";
import { Container } from "react-bootstrap";

import { Calendar, momentLocalizer } from "react-big-calendar";

import { messages } from "../../helpers/calendar-menssage";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarData } from "../../interfaces/Calendar";
import { CalendarModal } from "./CalendarModal";

// import { useDispatch } from "react-redux";

import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "../../style/styles.module.css";

import moment from "moment";
import "moment/locale/es";
import { ActionTypes } from "../../state/types/types";
import { useAppDispatch } from "../../hooks/redux";
import iziToast from "izitoast";
moment.locale("es");

const events: CalendarData[] = [
  {
    title: "All Day Event very long title",
    start: moment().toDate(),
    end: moment().add(2, "hour").toDate(),
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    user: {
      _id: 12,
      name: "Juan",
    },
  },
];

export const CalendarScreen = () => {
  const dispatch = useAppDispatch();
  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  // const [open, setopen] = useState(false);
  const onDobleClick = (e: any) => {
    console.log(e);
  };

  const onSelectEvent = (e: CalendarData) => {
    dispatch({
      type: ActionTypes.EVENTSELECTED,
      payload: e,
    });
    dispatch({
      type: ActionTypes.UIMODALOPEN,
      payload: {
        open: true,
      },
    });
  };

  const onViewChange = (e: any) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };

  const handleAddNewEvent = () => {
    dispatch({
      type: ActionTypes.UIMODALOPEN,
      payload: {
        open: true,
      },
    });
  };

  const eventStyleGetter = (
    event: any,
    start: any,
    end: any,
    isSelected: boolean
  ) => {
    const style = {
      backgroundColor: "#f4f4f4",
      borderRadius: "0px",
      color: "#000",
      border: "0px",
      display: "block",
    };

    return {
      style,
    };
  };

  const localizer = momentLocalizer(moment);

  return (
    <>
      <NavBar />

      <Container fluid className="px-3">
        <h1>Eventos</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          style={{ height: "80vh", width: "100%" }}
          components={{
            event: CalendarEvent,
          }}
          onDoubleClickEvent={onDobleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          view={lastView as any}
        />
        <button
          type="button"
          className={`btn ${styles.elevationButton}`}
          onClick={handleAddNewEvent}
        >
          <span
            style={{
              color: "#fff",
              margin: "auto",
              display: "grid",
            }}
          >
            <i className="fas fa-plus"></i>
          </span>
        </button>

        <CalendarModal />
      </Container>
    </>
  );
};
