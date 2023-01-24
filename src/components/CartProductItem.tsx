import { TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { Product } from "../types/Product";

type CartProductItemProps = {
  product: Product;
  onRemove: () => void;
};

export function CartProductItem({ product, onRemove }: CartProductItemProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img src={product.imgUrl} className="h-16 w-16 object-contain" />

        <div className="ml-2">
          <p className="text-sm">{product.name}</p>
          <div>qty</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <IconButton onClick={onRemove}>
          <Icon iconData={<TrashIcon />} />
        </IconButton>
        <div className="text-sm font-semibold mt-3">${product.price}</div>
      </div>
    </div>
  );
}
