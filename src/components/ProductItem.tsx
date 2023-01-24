import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { ItemContainer } from "./ItemContainer";
import { IconButton } from "./IconButton";
import { Rating } from "./Rating";

type ProductItemProps = {
  product: Product;
  onClick: () => void;
};

export function ProductItem({ product, onClick }: ProductItemProps) {
  return (
    <ItemContainer imageUrl={product.imgUrl}>
      <div className="mt-5">
        <div className="flex justify-between items-center text-sm">
          <p className="">{product.name}</p>
          <IconButton
            onClick={onClick}
            className={`rounded-full border border-border p-1 `}
          >
            <ShoppingBagIcon className={`h-5 w-5`} />
          </IconButton>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <p className="font-semibold text-lg">${product.price}</p>
            {product.oldPrice ? (
              <p className="text-border text-sm line-through ml-2">
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
