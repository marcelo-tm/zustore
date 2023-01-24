import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart } from "../components/Cart";
import useCartStore from "../stores/cart";
import useContentful from "../hooks/useContentful";

export function SharedLayout() {
  const cartStore = useCartStore();
  const { getCategories, getBestSelling } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      if (data) {
        cartStore.setCategories(data);
      }
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBestSelling();
      if (data) {
        cartStore.setBestSelling(data);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <Cart isOpen={cartStore.isOpen} toggleOpen={cartStore.toggleOpen} />

      <main className="pt-28 pb-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
