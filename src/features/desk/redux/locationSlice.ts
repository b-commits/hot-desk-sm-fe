import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Location } from '../defintions/types';

export const BASE_SLICE_NAME: string = 'location';

export interface LocationState {
  locations: Location[];
}

const initialLocation: Location = {
  id: '',
  city: '',
};

const initialState: LocationState = {
  locations: [initialLocation],
};

export const locationSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addLocation: (state: LocationState, action: PayloadAction<Location>) => {
      state.locations.push(action.payload);
    },
  },
});

export const { addLocation } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.location.locations;

export default locationSlice.reducer;
