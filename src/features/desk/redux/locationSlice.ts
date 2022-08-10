import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { deleteLocations, getLocations, postLocation } from '../api/deskApi';
import { Location } from '../defintions/types';
import { HTTP_Status } from './defintions';

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
      .addCase(deleteLocations.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(deleteLocations.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(deleteLocations.fulfilled, (state, action) => {
        state.locations = state.locations.filter(
          (location) => location.id != action.payload.id
        );
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(postLocation.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(postLocation.fulfilled, (state, action) => {
        // state.locations += action.payload;
        state.status = HTTP_Status.FULFILLED;
      });
  },
});

export const { addLocation } = locationSlice.actions;

export const selectLocations = (state: RootState) => state.location.locations;
export const selectStatus = (state: RootState) => state.location.status;

export default locationSlice.reducer;
