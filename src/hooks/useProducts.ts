import { create } from "zustand";
import { Product } from "../types/Product";

type ProductsStore = {
  products: Product[];
  setProducts: (data: Product[]) => void;
};

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (data: Product[]) => set({ products: data }),
}));

export default useProductsStore;
