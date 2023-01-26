import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { ItemContainer } from "../ItemContainer";
import { IconButton } from "../IconButton";
import { Rating } from "../Rating";
import { Product } from "../../types/Product";
import { useEffect, useState } from "react";
import { checkIfInCart } from "../../utility/cart";

type ProductItemProps = {
  product: Product;
  onClick: () => void;
  cartProducts: Product[];
};

export function ProductItem({
  product,
  onClick,
  cartProducts,
}: ProductItemProps) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isInCart = checkIfInCart(product, cartProducts);
    setSelected(isInCart);
  }, [cartProducts]);

  return (
    <ItemContainer imageUrl={product.imgUrl}>
      <div className="mt-5">
        <div className="flex justify-between items-center text-sm">
          <p className="">{product.name}</p>
          <IconButton
            onClick={onClick}
            className={`rounded-full border border-border p-1 ${
              selected ? "bg-primary" : ""
            }`}
            aria-label="product-cart-icon"
          >
            <ShoppingBagIcon
              className={`h-5 w-5 ${selected ? "text-white" : ""}`}
            />
          </IconButton>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <p className="font-semibold text-lg">${product.price}</p>
            {product.oldPrice ? (
              <p
                className="text-border text-sm line-through ml-2"
                aria-label="old-price"
              >
                ${product.oldPrice}
              </p>
            ) : null}
          </div>
          <Rating id={product.id} rating={product.rating} />
        </div>
      </div>
    </ItemContainer>
  );
}
