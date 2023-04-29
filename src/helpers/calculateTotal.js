export const calculateTotal = (mergedProducts) => {
  let total = 0;
  mergedProducts.forEach((mergedProduct) => {
    total += mergedProduct.quantity * mergedProduct.price;
  });
  return total;
};
