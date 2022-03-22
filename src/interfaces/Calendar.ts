export interface CalendarData {
  title: string;
  start: Date;
  end: Date;
  notes: string;
  user: User;
}

export interface User {
  _id: number;
  name: string;
}
