import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { Logo } from "./Logo";
import { HeaderCartIcon } from "./HeaderCartIcon";
import { IconButton } from "./IconButton";
import { ContentWrapper } from "./ContentWrapper";
import { Category } from "../types/Category";
import { Product } from "../types/Product";
import { Icon } from "./Icon";

type HeaderProps = {
  categories: Category[];
  productsLength: number;
  onToggleCart: () => void;
};

export function Header({
  categories,
  productsLength,
  onToggleCart,
}: HeaderProps) {
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
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <IconButton onClick={onToggleCart}>
          <HeaderCartIcon
            icon={<Icon iconData={<ShoppingBagIcon />} />}
            quantity={productsLength}
            aria-label="cart-icon"
          />
        </IconButton>
      </ContentWrapper>
    </>
  );
}
