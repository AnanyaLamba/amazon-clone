// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        // const { id, title, price, quantity } = action.payload;
        // console.log("Adding to cart: ", action.payload);
        // state.items.push({ id, title, price, quantity });
        const {product} = action.payload;
        state.items.push(product);  
      },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
