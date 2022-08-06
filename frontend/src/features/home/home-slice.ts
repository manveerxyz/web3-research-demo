import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import backend from 'common/http/backend';
import { ReduxStatus } from 'common/models/redux-status';

export interface HomeState {
  postWaitlistStatus: ReduxStatus
}

const initialState: HomeState = {
  postWaitlistStatus: 'idle',
};

export const postWaitlist = createAsyncThunk(
  'home/postWaitlist',
  async ({ email }: { email: string }) => {
    const res = await backend.postWaitlist(email);
    return res;
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(postWaitlist.pending, (state) => {
        state.postWaitlistStatus = 'pending';
      })
      .addCase(postWaitlist.fulfilled, (state) => {
        state.postWaitlistStatus = 'fulfilled';
      })
      .addCase(postWaitlist.rejected, (state) => {
        state.postWaitlistStatus = 'failed';
      });
  },
});

export const selectHome = (state: RootState): HomeState => state.home;

export default homeSlice.reducer;
