//Display single product page
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { product: null },
  reducers: {
    setProductDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProductDetails } = productSlice.actions;

export default productSlice.reducer;
