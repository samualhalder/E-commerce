import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUsers, createUsers} from './authAPI';

const initialState = {
  logedInUser: null,
  status: 'idle',
  error:null,
};

export const createUsersAsync = createAsyncThunk(
  'counter/createusers',
  async (userData) => {
    const response = await createUsers(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const checkUsersAsync = createAsyncThunk(
  'counter/checkusers',
  async (loginData) => {
    const response = await checkUsers(loginData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
      })
      .addCase(checkUsersAsync.rejected, (state,action) => {
        state.status = 'loading';
        state.error=action.error;
      })
      .addCase(checkUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectLogedInUser = (state) => state.auth.logedInUser;
export const selectError= (state) => state.auth.error;

export default counterSlice.reducer;
