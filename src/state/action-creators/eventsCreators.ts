import Swal from "sweetalert2";
import { AppDispatch } from "../store";
import { ActionTypes } from "../types/types";
import api from "../../utils/api";
import { Event } from "react-big-calendar";
import { IEventLoadingAction } from "../actions/eventAction";
import { CalendarData } from "../../interfaces/Calendar";
import { prepareEvents } from "../../helpers/prepareEvents";
import moment from "moment";

//Crear un nuevvo evento
export const startAddNewEvent = (event: CalendarData, formClear: Function) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingEvent(true));

    try {
      const token = localStorage.getItem("token");
      const resp = await api.post<CalendarData>("/event", event, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Event created successfully",
      });
      dispatch({
        type: ActionTypes.EVENTADD,
        payload: event,
      });
      formClear();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
      console.log(error);
    }
    dispatch(startLoadingEvent(false));
  };
};

//Listar eventos
export const startListEvents = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingEvent(true));
    const token = localStorage.getItem("token");
    try {
      const resp = await api.get<CalendarData[]>("/event", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = prepareEvents(resp.data);
      dispatch({
        type: ActionTypes.EVENTLIST,
        payload: data,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error get events",
      });
      console.log(error);
    }
    dispatch(startLoadingEvent(false));
  };
};

export const editEvent = (event: CalendarData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingEvent(true));
    const token = localStorage.getItem("token");
    try {
      ///Convertir ñas fechas en date
      const { _id, ...data } = event;

      const resp = await api.put<CalendarData>(`/event/${event._id}`, data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Event updated successfully",
      });
      dispatch({
        type: ActionTypes.EVENTEDIT,
        payload: event,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
      console.log(error);
    }
    dispatch(startLoadingEvent(false));
  };
};

const startLoadingEvent = (loading: boolean): IEventLoadingAction => {
  return {
    type: ActionTypes.EVENTLOADING,
    payload: loading,
  };
};
