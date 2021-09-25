export interface Child {
  name: string;
  age: number;
}

export interface Passenger {
  id: number;
  name: string;
  checkIn: boolean;
  dateChek: number | null;
  children: Child[] | null;
}
