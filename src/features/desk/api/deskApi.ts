import { createAsyncThunk } from '@reduxjs/toolkit';
import { Location } from '../defintions/types';

const API_BASE_URL: string = 'https://hotdesk-api.azurewebsites.net/locations/';

export const getLocations = createAsyncThunk('getLocations', async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
});

export const deleteLocations = createAsyncThunk(
  'deleteLocations',
  async (location: Location) => {
    await fetch(`${API_BASE_URL}${location.id}`, {
      method: 'DELETE',
    });
    return location;
  }
);

export const postLocation = createAsyncThunk(
  'postLocation',
  async (city: string) => {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        city: city,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
);
