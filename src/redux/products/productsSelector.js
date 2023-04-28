import { createSelector } from "reselect";

const getProductsState = (state) => state.products;

export const getProducts = createSelector(
  getProductsState,
  (productsState) => productsState.items
);
