import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Reservation } from '../defintions/types';

export const BASE_SLICE_NAME: string = 'reservation';

export interface ReservationState {
  reservations: Reservation[];
}

const initialState: ReservationState = {
  reservations: [],
};

export const reservationSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addReservation: (
      state: ReservationState,
      action: PayloadAction<Reservation>
    ) => {
      state.reservations.push(action.payload);
    },
  },
});

export const { addReservation } = reservationSlice.actions;

export const selectReservations = (state: RootState) =>
  state.reservation.reservations;

export default reservationSlice.reducer;
