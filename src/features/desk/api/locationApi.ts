import { createAsyncThunk } from '@reduxjs/toolkit';
import { Location } from '../definitions/types';

const API_BASE_URL: string = 'https://hotdesk-api.azurewebsites.net/locations/';

export const getLocations = createAsyncThunk('getLocations', async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
});

export const deleteLocation = createAsyncThunk(
  'deleteLocations',
  async (location: Location) => {
    const response = await fetch(`${API_BASE_URL}${location.id}`, {
      method: 'DELETE',
    });

    if (response.status === 400) {
      alert('This location has some desks assigned. Unable to delete it.');
      throw new Error('Bad Request');
    }

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
