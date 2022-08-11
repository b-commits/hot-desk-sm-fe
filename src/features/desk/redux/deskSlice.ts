import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { deleteDesk, getDesks, postDesk } from '../api/deskApi';
import { Desk, HTTP_Status } from '../defintions/types';

export const BASE_SLICE_NAME: string = 'desk';

export interface DeskState {
  desks: Desk[];
  status: HTTP_Status;
}

const initialState: DeskState = {
  desks: [],
  status: HTTP_Status.IDLE,
};

export const deskSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addDesk: () => {},
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
        console.log(action);
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

export const { addDesk } = deskSlice.actions;

export const selectDesks = (state: RootState) => state.desk.desks;
export const selectStatus = (state: RootState) => state.desk.status;

export default deskSlice.reducer;
