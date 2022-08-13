import { createAsyncThunk } from '@reduxjs/toolkit';
import { Desk } from '../definitions/types';

const API_BASE_URL: string = 'https://hotdesk-api.azurewebsites.net/desks/';

export const getDesks = createAsyncThunk('getDesks', async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
});

export const deleteDesk = createAsyncThunk(
  'deleteDesks',
  async (desk: Desk) => {
    const response = await fetch(`${API_BASE_URL}${desk.id}`, {
      method: 'DELETE',
    });

    if (response.status === 400) {
      alert('This desk has some ongoing reservations. Unable to delete it.');
      throw new Error('Bad Request');
    }
    return desk;
  }
);

export const postDesk = createAsyncThunk(
  'postDesk',
  async (locationId: string) => {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        locationId: locationId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
);
