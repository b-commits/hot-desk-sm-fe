import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { deleteLocation, getLocations, postLocation } from '../api/locationApi';
import { API_Error, HTTP_Status, Location } from '../definitions/types';

export const BASE_SLICE_NAME: string = 'location';

export interface LocationState {
  locations: Location[];
  status: HTTP_Status;
  errorMsg?: API_Error;
}

const initialState: LocationState = {
  locations: [],
  status: HTTP_Status.IDLE,
  errorMsg: {},
};

export const locationSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    clearError: (state) => {
      state.errorMsg! = {};
    },
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
        state.errorMsg!.locationError = action.error.message;
        state.status = HTTP_Status.IDLE;
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

export const { clearError } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.location.locations;
export const selectErrors = (state: RootState) => state.location.errorMsg;
export const selectStatus = (state: RootState) => state.location.status;
export const selectLocationCityById =
  (locationId: string) => (state: RootState) => {
    return state.location.locations.filter(
      (location) => location.id === locationId
    )[0]?.city;
  };

export default locationSlice.reducer;
