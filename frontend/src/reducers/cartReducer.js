import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = new createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      state.products.push(product);
      state.quantity += 1;
      state.total += product.quantity * product.price;
    },
    updateProduct: (state, action) => {
      const { index, dir } = action.payload;

      if (index >= 0 && index < state.products.length) {
        const product = state.products[index];

        if (dir === "inc") {
          product.quantity += 1;
        } else {
          product.quantity -= 1;
          if (product.quantity === 0) {
            state.products.splice(index, 1);
          }
        }

        state.quantity = state.products.length;
        state.total = state.products.reduce(
          (acc, p) => acc + p.quantity * p.price,
          0
        );
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
