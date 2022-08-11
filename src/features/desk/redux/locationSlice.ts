import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { deleteLocation, getLocations, postLocation } from '../api/locationApi';
import { HTTP_Status, Location } from '../defintions/types';

export const BASE_SLICE_NAME: string = 'location';

export interface LocationState {
  locations: Location[];
  status: HTTP_Status;
}

const initialState: LocationState = {
  locations: [],
  status: HTTP_Status.IDLE,
};

export const locationSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addLocation: () => {},
  },
  extraReducers: (builder: ActionReducerMapBuilder<LocationState>) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(deleteLocation.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.locations = state.locations.filter(
          (location) => location.id !== action.payload.id
        );
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(postLocation.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(postLocation.fulfilled, (state, action) => {
        state.locations.push(action.payload);
        state.status = HTTP_Status.FULFILLED;
      });
  },
});

export const { addLocation } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.location.locations;
export const selectStatus = (state: RootState) => state.location.status;
export const selectLocationCityById =
  (locationId: string) => (state: RootState) => {
    return state.location.locations.filter(
      (location) => location.id === locationId
    )[0]?.city;
  };

export default locationSlice.reducer;
