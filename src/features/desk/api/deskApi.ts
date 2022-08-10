import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Desk, Location, Reservation } from '../defintions/types';

const LOCATION_ENDPOINT: string = '/locations';
const DESK_ENDPOINT: string = '/locations';
const RESERVATION_ENDPOINT: string = '/locations';
const API_BASE_URL: string = 'https://hotdesk-api.azurewebsites.net/';

export const deskApi = axios.create({
  baseURL: 'https://hotdesk-api.azurewebsites.net/locations',
  headers: {
    Accept: 'application/json',
  },
});

export const getDesks = async (): Promise<Desk> => {
  const response = await deskApi.get(DESK_ENDPOINT);
  return response.data;
};

export const postDesk = async (desk: Desk): Promise<Desk> => {
  const response = await deskApi.post(DESK_ENDPOINT, desk);
  return response.data;
};

/**
 * Locations
 */
export const getLocations = createAsyncThunk('/locations', async () => {
  return fetch(API_BASE_URL + 'locations').then((res) => res.json());
});

export const deleteProducts = createAsyncThunk(
  '/locations',
  async (id: string) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
);

export const postLocation = async (location: Location): Promise<Location> => {
  const response = await deskApi.post(LOCATION_ENDPOINT, location);
  return response.data;
};

export const getReservations = async (): Promise<Reservation> => {
  const response = await deskApi.get(RESERVATION_ENDPOINT);
  return response.data;
};

export const postReservation = async (
  desk: Reservation
): Promise<Reservation> => {
  const response = await deskApi.post(RESERVATION_ENDPOINT, desk);
  return response.data;
};
