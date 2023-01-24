import { XCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import { Icon } from "./Icon";
import { IconButton } from "./IconButton";
import useCartStore from "../stores/cart";
import { CartProductItem } from "./CartProductItem";
import { useEffect, useState } from "react";

type CartProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export function Cart({ isOpen, toggleOpen }: CartProps) {
  const cartStore = useCartStore();
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const value = cartStore.cartProducts.reduce((acc, item) => {
      return acc + item.price;
    }, 0.0);
    setTotal(value);
  }, [cartStore.cartProducts]);

  return (
    <>
      <div
        className={`bg-default bg-opacity-50 w-full h-screen fixed ${
          isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        } ease-in-out duration-300`}
        onClick={toggleOpen}
      ></div>

      <div
        className={`fixed mt-24 bg-white p-5 right-0 z-50 w-80 h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col flex-1 h-5/6">
          <div className="flex justify-between">
            <p className="uppercase font-semibold">Your Cart</p>
            <IconButton onClick={toggleOpen}>
              <Icon iconData={<XCircleIcon />} />
            </IconButton>
          </div>

          {cartStore.cartProducts.length === 0 ? (
            <div className="flex flex-col items-center text-border mt-10">
              <ShoppingBagIcon className="h-20" />
              <p className="mt-2">Your shopping cart is empty</p>
            </div>
          ) : (
            <ul className="mt-10">
              {cartStore.cartProducts.map((prod) => (
                <li key={prod.id}>
                  <CartProductItem
                    product={prod}
                    onRemove={() => cartStore.toggleCartProducts(prod)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex uppercase font-semibold">
          <p>Total</p>
          <p className="ml-3">${total}</p>
        </div>
      </div>
    </>
  );
}
