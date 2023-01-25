import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { Logo } from "../Logo";
import { HeaderCartIcon } from "../HeaderCartIcon";
import { IconButton } from "../IconButton";
import { ContentWrapper } from "../ContentWrapper";
import { Category } from "../../types/Category";
import { Product } from "../../types/Product";
import { Icon } from "../Icon";

interface CartData {
  categories: Category[];
  cartProducts: Product[];
  toggleOpen: () => void;
}

type HeaderProps = {
  cartData: CartData;
};

export function Header({ cartData }: HeaderProps) {
  return (
    <>
      <ContentWrapper
        className="border border-b-border bg-white z-50 fixed"
        row
        center
      >
        <Logo />

        <nav>
          <ul className="flex gap-7 uppercase font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            {cartData.categories.map((category) => (
              <li key={category.id}>
                <Link to={`category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <IconButton onClick={cartData.toggleOpen}>
          <HeaderCartIcon
            icon={<Icon iconData={<ShoppingBagIcon />} />}
            quantity={cartData.cartProducts.length}
            aria-label="cart-icon"
          />
        </IconButton>
      </ContentWrapper>
    </>
  );
}
