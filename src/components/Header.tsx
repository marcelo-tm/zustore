import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { HeaderCartIcon } from "./HeaderCartIcon";
import { IconButton } from "./IconButton";
import { ContentWrapper } from "./ContentWrapper";
import useCartStore from "../stores/cart";
import { Category } from "../types/Category";

export function Header() {
  const cartStore = useCartStore();

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
            {cartStore.categories.map((category) => (
              <li key={category.id}>
                <Link to={`category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <IconButton onClick={cartStore.toggleOpen}>
          <HeaderCartIcon />
        </IconButton>
      </ContentWrapper>
    </>
  );
}
