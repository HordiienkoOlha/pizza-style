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
      // const itemIndex = products.items.findIndex(
      //   (item) => item.id === payload.id
      // );
      // if (itemIndex === -1) {
      //   products.items.push({ ...payload, quantity: 1 });
      // } else {
      //   products.items[itemIndex].quantity += 1;
      // }
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
    clearCart: (products) => {
      products.items = [];
    },
  },
});

export const { addProduct, deleteProduct, deleteProductQuantity, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
