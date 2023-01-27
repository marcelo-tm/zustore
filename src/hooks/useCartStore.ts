import { create } from "zustand";
import { Product } from "../types/Product";

type CartStore = {
  isOpen: boolean;
  toggleOpen: () => void;
  cartProducts: Product[];
  toggleProduct: (data: Product) => void;
  updateProductQuantity: (data: Product, quantity: number) => void;
};

const useCartStore = create<CartStore>((set, get) => ({
  isOpen: false,
  toggleOpen: () => set({ isOpen: !get().isOpen }),

  cartProducts: [],
  toggleProduct: (data: Product) =>
    set((state) => {
      let list: Product[] = [];

      const index = state.cartProducts.findIndex((obj) => obj.id === data.id);

      if (index > -1) {
        list = state.cartProducts.filter((prod) => prod.id !== data.id);
      } else {
        list = [...state.cartProducts, data];
      }

      return {
        ...state,
        cartProducts: list,
      };
    }),
  updateProductQuantity: (data: Product, quantity: number) =>
    set((state) => {
      const updatedList = [...state.cartProducts];

      const index = updatedList.findIndex((obj) => obj.id === data.id);

      if (index > -1) {
        updatedList[index] = {
          ...data,
          quantity,
        };
      }

      return { ...state, cartProducts: updatedList };
    }),
}));

export default useCartStore;
