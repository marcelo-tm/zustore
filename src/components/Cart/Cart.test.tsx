import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Cart } from "./Cart";

describe("Cart", () => {
  afterEach(cleanup);

  it("should toggle close when the icon button is clicked", () => {
    let isOpen = true;
    const toggleOpen = () => {
      isOpen = !isOpen;
    };
    const cartStore = {
      cartProducts: [
        {
          id: 1,
          name: "Product 1",
          imgUrl: "",
          price: 10,
          rating: 1,
          categoryId: 1,
        },
      ],
      toggleCartProducts: () => {},
    };
    const { getByRole } = render(
      <Cart isOpen={isOpen} toggleOpen={toggleOpen} cartData={cartStore} />
    );

    const closeButton = getByRole("button", { name: "close" });
    fireEvent.click(closeButton);
    expect(isOpen).toBe(false);
  });

  it("should show total when there are products in the cart", () => {
    const isOpen = true;
    const toggleOpen = () => {};
    const cartStore = {
      cartProducts: [
        {
          id: 1,
          name: "Product 1",
          imgUrl: "",
          price: 10,
          rating: 1,
          categoryId: 1,
        },
        {
          id: 2,
          name: "Product 2",
          imgUrl: "",
          price: 20,
          rating: 2,
          categoryId: 2,
        },
      ],
      toggleCartProducts: () => {},
    };
    const { getByText } = render(
      <Cart isOpen={isOpen} toggleOpen={toggleOpen} cartData={cartStore} />
    );

    expect(getByText("$30")).toBeInTheDocument();
  });

  it("should show an empty message when there ano no products in the cart", () => {
    const isOpen = true;
    const toggleOpen = () => {};
    const cartStore = {
      cartProducts: [],
      toggleCartProducts: () => {},
    };
    const { getByText } = render(
      <Cart isOpen={isOpen} toggleOpen={toggleOpen} cartData={cartStore} />
    );

    expect(getByText("Your shopping cart is empty")).toBeInTheDocument();
  });

  it("should show the backdrop when the cart is open", () => {
    const isOpen = true;
    const toggleOpen = () => {};
    const cartStore = {
      cartProducts: [],
      toggleCartProducts: () => {},
    };
    const { getByLabelText } = render(
      <Cart isOpen={isOpen} toggleOpen={toggleOpen} cartData={cartStore} />
    );

    expect(getByLabelText("overlay")).toHaveClass("opacity-100", "z-40");
  });

  it("should not show the backdrop when the cart is closed", () => {
    const isOpen = false;
    const toggleOpen = () => {};
    const cartStore = {
      cartProducts: [],
      toggleCartProducts: () => {},
    };
    const { getByLabelText } = render(
      <Cart isOpen={isOpen} toggleOpen={toggleOpen} cartData={cartStore} />
    );

    expect(getByLabelText("overlay")).toHaveClass(
      "opacity-0",
      "pointer-events-none"
    );
  });
});
