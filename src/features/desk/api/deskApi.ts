import axios from 'axios';
import { Desk, Reservation } from '../defintions/types';

const LOCATION_ENDPOINT: string = '/locations';
const DESK_ENDPOINT: string = '/locations';
const RESERVATION_ENDPOINT: string = '/locations';

// I should probably make the API URL an enivornment variable, but it's no biggie. Makes deployment a bit easier.
export const deskApi = axios.create({
  baseURL: 'https://hotdesk-api.azurewebsites.net/',
  headers: {
    Accept: 'application/json',
  },
});

export const postDish = async (desk: Desk): Promise<Desk> => {
  const response = await deskApi.post(DESK_ENDPOINT, desk);
  return response.data;
};

export const postLocation = async (loction: Location): Promise<Desk> => {
  const response = await deskApi.post(LOCATION_ENDPOINT, location);
  return response.data;
};

export const postReservation = async (
  desk: Reservation
): Promise<Reservation> => {
  const response = await deskApi.post(RESERVATION_ENDPOINT, desk);
  return response.data;
};
