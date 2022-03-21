
import { CalendarData } from '../../interfaces/Calendar';

interface CalendarEventProps {
    event: CalendarData
}

export const CalendarEvent = ({event}: CalendarEventProps) => {
    return (
        <div>
            <span>{event.title}</span>
            <span>{event.user.name}</span>
        </div>
    )
}
