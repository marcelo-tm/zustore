import { create } from "zustand";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

type CarStoreState = {
  isOpen: boolean;
  toggleOpen: () => void;
  categories: Category[];
  setCategories: (data: Category[]) => void;
  bestSelling: Product[];
  setBestSelling: (data: Product[]) => void;
  cartProducts: Product[];
  toggleCartProducts: (data: Product) => void;
  updateProductQuantity: (data: Product, quantity: number) => void;
};

const useCartStore = create<CarStoreState>((set, get) => ({
  isOpen: false,
  toggleOpen: () => set({ isOpen: !get().isOpen }),

  categories: [],
  setCategories: (data: Category[]) => set({ categories: data }),

  bestSelling: [],
  setBestSelling: (data: Product[]) => set({ bestSelling: data }),

  cartProducts: [],
  toggleCartProducts: (data: Product) =>
    set((state) => {
      let list: Product[] = [];
      if (state.cartProducts.includes(data)) {
        list = state.cartProducts.filter((prod) => prod.id !== data.id);
      } else {
        list = [...state.cartProducts, { ...data, quantity: 1 }];
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
