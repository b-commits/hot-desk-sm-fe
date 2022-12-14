import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { deleteDesk, getDesks, postDesk } from '../api/deskApi';
import { API_Error, Desk, HTTP_Status } from '../definitions/types';

export const BASE_SLICE_NAME: string = 'desk';

export interface DeskState {
  desks: Desk[];
  status: HTTP_Status;
  errorMsg?: API_Error;
}

const initialState: DeskState = {
  desks: [],
  status: HTTP_Status.IDLE,
  errorMsg: {},
};

export const deskSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    clearError: (state) => {
      state.errorMsg! = {};
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<DeskState>) => {
    builder
      .addCase(getDesks.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(getDesks.fulfilled, (state, action) => {
        state.desks = action.payload;
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(deleteDesk.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(deleteDesk.rejected, (state, action) => {
        state.errorMsg!.deskError = action.error.message;
        state.status = HTTP_Status.IDLE;
      })
      .addCase(deleteDesk.fulfilled, (state, action) => {
        state.desks = state.desks.filter(
          (desk) => desk.id !== action.payload.id
        );
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(postDesk.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(postDesk.fulfilled, (state, action) => {
        state.desks.push(action.payload);
        state.status = HTTP_Status.FULFILLED;
      });
  },
});

export const { clearError } = deskSlice.actions;

export const selectDesks = (state: RootState) => state.desk.desks;
export const selectErrors = (state: RootState) => state.desk.errorMsg;
export const selectStatus = (state: RootState) => state.desk.status;
export const selectDeskIdsByLocationName =
  (locationName: string | undefined) => (state: RootState) => {
    if (!locationName) {
      return state.desk.desks;
    } else {
      const locations = state.location.locations;
      const filteredLocationIds = locations
        .filter((location) =>
          location.city.toLowerCase().includes(locationName.toLowerCase())
        )
        .map((location) => location.id);
      const filteredDesks = state.desk.desks.filter((desk) => {
        return filteredLocationIds.includes(desk.locationId);
      });
      return filteredDesks;
    }
  };

export default deskSlice.reducer;
