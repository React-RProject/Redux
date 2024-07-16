import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ListState {
  items: Array<{ id: number; title: string }>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ListState = {
  items: [],
  status: 'idle',
  error: null,
};

// Define the type for the data fetched from the API
interface GetDataI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Create an async thunk for fetching data
export const fetchList: any = createAsyncThunk<Array<GetDataI>, void>(
  'list/fetchList',
  async () => {
    const response = await axios.get<Array<GetDataI>>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
);

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default listSlice.reducer;
