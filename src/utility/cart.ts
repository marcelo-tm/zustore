import { Product } from "../types/Product";

export const calculateTotalPrice = (cartProducts: Product[]) => {
  return cartProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0.0);
};
