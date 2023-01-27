import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { Product } from "../types/Product";
import { QuantitySelector } from "./QuantitySelector";

type CartProductItemProps = {
  product: Product;
  onRemove: () => void;
  onQuantityChange: (qty: number) => void;
};

export function CartProductItem({
  product,
  onRemove,
  onQuantityChange,
}: CartProductItemProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src={product.imgUrl} className="h-16 w-16 object-contain" />

        <div className="ml-2">
          <p className="text-sm">{product.name}</p>
          <QuantitySelector
            quantity={product.quantity}
            onChange={onQuantityChange}
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <IconButton onClick={onRemove}>
          <Icon iconData={<TrashIcon />} />
        </IconButton>
        <div className="text-sm font-semibold mt-3">
          ${product.price * product.quantity}
        </div>
      </div>
    </div>
  );
}
