import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UpadateItems, deleteItems, fetchCount } from './cartAPI';
import { addToCart ,fetchItemsByid} from './cartAPI';


const initialState = {
  cart:[],
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchItemsByidAsync = createAsyncThunk(
  'cart/fetchItemByuserId',
  async (userid) => {
    const response = await fetchItemsByid(userid);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const UpadateItemsAsync = createAsyncThunk(
  'cart/UpdateItems',
  async (item) => {
    const response = await UpadateItems(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteItemsAsync = createAsyncThunk(
  'cart/deleteItems',
  async (itemid) => {
    const response = await deleteItems(itemid);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart.push(action.payload);
      })
      .addCase(fetchItemsByidAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByidAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cart=(action.payload);
      })
      .addCase(UpadateItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(UpadateItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.cart.findIndex(item=>item.id===action.payload.id);
        state.cart[index]=(action.payload);
      })
      .addCase(deleteItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.cart.findIndex(item=>item.id===action.payload.id);
        state.cart.splice(index,1);
      });
  },
});

export const { increment } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
