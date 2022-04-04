export interface CalendarData {
  title: string;
  start: Date;
  end: Date;
  notes: string;
  _id?: string;
}

export interface User {
  _id: number;
  name: string;
}
