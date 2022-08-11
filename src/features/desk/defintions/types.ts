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

export enum ResourceType {
  DESK = 'Desk',
  LOCATION = 'Location',
  RESERVATION = 'Reservation',
}

export enum HTTP_Status {
  PENDING = 'pending',
  REJECTED = 'rejected',
  FULFILLED = 'fulfilled',
  ERROR = 'Error',
  IDLE = 'Idle',
}
