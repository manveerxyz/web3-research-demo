import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ReduxStatus } from 'common/models/redux-status';
import { Paper } from 'common/models/paper';
import ethereum from 'common/http/ethereum';

export interface ResearchState {
  getPapersStatus: ReduxStatus
  getPaperByIdStatus: ReduxStatus
  getCitationsStatus: ReduxStatus

  paperIdToPaper: { [paperId: number]: Paper }
  paperIdToCitations: { [paperId: number]: number[] }
  paperIds: number[]
}

const initialState: ResearchState = {
  getPapersStatus: 'idle',
  getPaperByIdStatus: 'idle',
  getCitationsStatus: 'idle',

  paperIdToPaper: {},
  paperIdToCitations: {},
  paperIds: [],
};

export const getPapers = createAsyncThunk(
  'papers/getPapers',
  async ({ ids }: { ids: number[] }) => {
    const papers = await ethereum.getPapers(ids);
    return papers;
  },
);

export const getPaperById = createAsyncThunk(
  'papers/getPaperById',
  async ({ id }: { id: number }) => {
    const paper = await ethereum.getPaperById(id);
    return paper;
  },
);

export const getCitations = createAsyncThunk(
  'papers/getCitations',
  async ({ id }: { id: number }) => {
    const citations = await ethereum.getCitations(id);
    return citations;
  },
);

export const researchSlice = createSlice({
  name: 'research',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getPapers.pending, (state) => {
        state.getPapersStatus = 'pending';
      })
      .addCase(getPapers.fulfilled, (state, action) => {
        state.getPapersStatus = 'fulfilled';
        action.payload.forEach((paper) => {
          state.paperIdToPaper[paper.id] = paper;
          state.paperIds.push(paper.id);
        });
      })
      .addCase(getPapers.rejected, (state) => {
        state.getPapersStatus = 'failed';
      })

      .addCase(getPaperById.pending, (state) => {
        state.getPaperByIdStatus = 'pending';
      })
      .addCase(getPaperById.fulfilled, (state, action) => {
        state.getPaperByIdStatus = 'fulfilled';
        state.paperIdToPaper[action.meta.arg.id] = action.payload;
      })
      .addCase(getPaperById.rejected, (state) => {
        state.getPaperByIdStatus = 'failed';
      })

      .addCase(getCitations.pending, (state) => {
        state.getCitationsStatus = 'pending';
      })
      .addCase(getCitations.fulfilled, (state, action) => {
        state.getCitationsStatus = 'fulfilled';
        state.paperIdToCitations[action.meta.arg.id] = action.payload;
      })
      .addCase(getCitations.rejected, (state) => {
        state.getCitationsStatus = 'failed';
      });
  },
});

export const selectResearch = (state: RootState): ResearchState => state.research;

export default researchSlice.reducer;
