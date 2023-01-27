import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart } from "../components/Cart";
import useCartStore from "../hooks/useCartStore";
import useContentful from "../hooks/useContentful";
import useCategoriesStore from "../hooks/useCategoriesStore";
import useBestSellingStore from "../hooks/useBestSellingStore";

export function SharedLayout() {
  const cartStore = useCartStore();
  const categoriesStore = useCategoriesStore();
  const bestSellingStore = useBestSellingStore();
  const { getCategories, getBestSelling } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      if (data) {
        categoriesStore.setCategories(data);
      }
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBestSelling();
      if (data) {
        bestSellingStore.setBestSelling(data);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header
        categories={categoriesStore.categories}
        productsLength={cartStore.cartProducts.length}
        onToggleCart={cartStore.toggleOpen}
      />
      <Cart
        isOpen={cartStore.isOpen}
        toggleOpen={cartStore.toggleOpen}
        products={cartStore.cartProducts}
        toggleProduct={cartStore.toggleProduct}
        updateProductQuantity={cartStore.updateProductQuantity}
      />

      <main className="pt-28 pb-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
