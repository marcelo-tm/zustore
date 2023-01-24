import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { HeaderCartIcon } from "./HeaderCartIcon";
import { IconButton } from "./IconButton";
import { ContentWrapper } from "./ContentWrapper";
import useCartStore from "../stores/cart";

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
          <ul className="flex gap-7">
            <Link to="/" className="uppercase font-semibold">
              Home
            </Link>
            <li className="uppercase font-semibold">Products</li>
            <Link to="about" className="uppercase font-semibold">
              About Us
            </Link>
            <li className="uppercase font-semibold">Contact</li>
          </ul>
        </nav>

        <IconButton onClick={cartStore.toggleOpen}>
          <HeaderCartIcon />
        </IconButton>
      </ContentWrapper>
    </>
  );
}
