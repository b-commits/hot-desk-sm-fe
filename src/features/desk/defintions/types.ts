export interface Location {
  id: string;
  city: string;
}

export interface Desk {
  id: string;
  locationId: string;
}

export interface Reservation {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  deskId: string;
}
