import { createAsyncThunk } from '@reduxjs/toolkit';
import { Reservation } from '../definitions/types';

const API_BASE_URL: string =
  'https://hotdesk-api.azurewebsites.net/reservations/';

export const getReservations = createAsyncThunk('getReservations', async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
});

export const deleteReservation = createAsyncThunk(
  'deleteReservation',
  async (reservation: Reservation) => {
    const response = await fetch(`${API_BASE_URL}${reservation.id}`, {
      method: 'DELETE',
    });

    if (response.status === 400) {
      alert(
        'This reservation can not be deleted. You can only delete reservations 7 days before they start'
      );
      throw new Error('Incorrect');
    }
    return reservation;
  }
);

export const postReservation = createAsyncThunk(
  'postReservation',
  async ({ endDate, startDate, name, deskId }: Reservation) => {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        endDate: endDate,
        startDate: startDate,
        name: name,
        deskId: deskId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 400) {
      alert(
        "This reservation could not be made. It's either too long, or the dates are incorrect (dateStart > dateEnd)"
      );
    }

    return response.json();
  }
);
