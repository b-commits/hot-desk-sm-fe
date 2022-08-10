import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Desk } from '../defintions/types';

export const BASE_SLICE_NAME: string = 'desk';

export interface DeskState {
  desks: Desk[];
}

const initialDesk: Desk = {
  id: '',
  locationId: '',
};

const initialState: DeskState = {
  desks: [initialDesk],
};

export const deskSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addDesk: (state: DeskState, action: PayloadAction<Desk>) => {
      state.desks.push(action.payload);
    },
  },
});

export const { addDesk } = deskSlice.actions;

export const selectDesks = (state: RootState) => state.desk.desks;

export default deskSlice.reducer;
