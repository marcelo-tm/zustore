import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { Icon } from "./Icon";
import useCartStore from "../stores/cart";

export function HeaderCartIcon() {
  const cartStore = useCartStore();

  return (
    <div className="relative h-9 w-9 flex flex-col justify-end">
      <span className="absolute top-0 right-0 bg-primary rounded-full w-6 h-6 text-white text-xs flex justify-center items-center">
        {cartStore.cartProducts.length}
      </span>
      <Icon iconData={<ShoppingBagIcon />} />
    </div>
  );
}
