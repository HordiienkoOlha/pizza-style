import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (products, { payload }) => {
      products.items.push(payload);
    },
    deleteProduct: (products, { payload }) => {
      products.items = products.items.filter((item) => item.id !== payload);
    },
    deleteProductQuantity: (products, { payload }) => {
      const updatedItems = [...products.items];
      const itemIndex = updatedItems.findIndex((item) => item.id === payload);
      if (itemIndex >= 0) {
        updatedItems[itemIndex].quantity -= 1;
        if (updatedItems[itemIndex].quantity === 0) {
          updatedItems.splice(itemIndex, 1);
        }
      }
      products.items = updatedItems;
    },
  },
});

export const { addProduct, deleteProduct, deleteProductQuantity } =
  productSlice.actions;

export default productSlice.reducer;
