import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import deskReducer from '../features/desk/redux/deskSlice';
import {
  default as locationReducer,
  default as reservationReducer,
} from '../features/desk/redux/locationSlice';

export const store = configureStore({
  reducer: {
    desk: deskReducer,
    location: locationReducer,
    reservation: reservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
