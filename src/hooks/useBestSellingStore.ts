import { create } from "zustand";
import { Product } from "../types/Product";

type BestSellingStore = {
  bestSelling: Product[];
  setBestSelling: (data: Product[]) => void;
};

const useBestSellingStore = create<BestSellingStore>((set) => ({
  bestSelling: [],
  setBestSelling: (data: Product[]) => set({ bestSelling: data }),
}));

export default useBestSellingStore;
