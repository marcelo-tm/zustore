import { create } from "zustand";
import { Category } from "../types/Category";

type CategoriesStore = {
  categories: Category[];
  setCategories: (data: Category[]) => void;
};

const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  setCategories: (data: Category[]) => set({ categories: data }),
}));

export default useCategoriesStore;
