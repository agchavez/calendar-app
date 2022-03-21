import React from 'react';
import { NavBar } from '../ui/NavBar';
import { Container } from 'react-bootstrap';

import moment from 'moment'
import 'moment/locale/es';
import { Calendar, momentLocalizer } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-menssage';
import { CalendarEvent } from './CalendarEvent';
import { CalendarData } from '../../interfaces/Calendar';
import { CalendarModal } from './CalendarModal';
//Crear una interfas de dato para el calendari

moment.locale('es');


const events : CalendarData[] = [
  {
    title: 'All Day Event very long title',
    start: moment().toDate(),
    end: moment().add( 2, 'hour').toDate(),
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user : {
      _id : 12,
      name : 'Juan'
    }
  },
]

export const CalendarScreen = () => {

  const onDobleClick = (e: any) => {
    console.log(e);
  }

  const onSelectEvent = (e: any) => {
    console.log(e);
  }

  const onViewChange = (e: any) => {
    console.log(e);
    localStorage.setItem('calendarView', e);
  }

  const eventStyleGetter = (event: any, start: any, end:any, isSelected: boolean) => {
        const style = {
          backgroundColor: '#f4f4f4',
          borderRadius: '0px',
          color: '#000',
          border: '0px',
          display: 'block'
        }

        return {
          style
        }
  }

  const localizer = momentLocalizer(moment);

  return <>
        <NavBar />
        <Container>
          <h1>Calendario</h1>
          <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages={messages}
              eventPropGetter={eventStyleGetter}
              style={{ height: 500 }}
              components={{
                event: CalendarEvent
              }}
              onDoubleClickEvent = {onDobleClick}
              onSelectEvent = {onSelectEvent}
              onView = {onViewChange}
            />

            <CalendarModal  />
        </Container>
  </>;
};
