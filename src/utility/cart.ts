import { Product } from "../types/Product";

export function calculateTotalPrice(cartProducts: Product[]) {
  return cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0.0);
}

export function checkIfInCart(product: Product, cartProducts: Product[]) {
  if (cartProducts.some((prod) => prod.id === product.id)) {
    return true;
  }

  return false;
}
