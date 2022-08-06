import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeSlice from 'features/home/home-slice';
import researchSlice from 'features/research/research-slice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    research: researchSlice,
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
