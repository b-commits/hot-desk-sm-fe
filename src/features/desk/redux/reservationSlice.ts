import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import {
  deleteReservation,
  getReservations,
  postReservation,
} from '../api/reservationApi';
import { HTTP_Status, Reservation } from '../definitions/types';

export const BASE_SLICE_NAME: string = 'reservation';

export interface ReservationState {
  reservations: Reservation[];
  status: HTTP_Status;
}

const initialState: ReservationState = {
  reservations: [],
  status: HTTP_Status.IDLE,
};

export const reservationSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addReservation: () => {},
  },
  extraReducers: (builder: ActionReducerMapBuilder<ReservationState>) => {
    builder
      .addCase(getReservations.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id
        );
        state.status = HTTP_Status.FULFILLED;
      })
      .addCase(postReservation.pending, (state) => {
        state.status = HTTP_Status.PENDING;
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
        state.status = HTTP_Status.FULFILLED;
      });
  },
});

export const { addReservation } = reservationSlice.actions;

export const selectReservations = (state: RootState) =>
  state.reservation.reservations;

export default reservationSlice.reducer;
