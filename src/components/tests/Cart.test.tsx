import "@testing-library/jest-dom";
import { render, fireEvent, cleanup, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Cart } from "../Cart";

describe("Cart", () => {
  afterEach(cleanup);

  it("should close when the icon button is clicked", () => {
    const mockObj = {
      isOpen: true,
      toggleOpen: () => {
        mockObj.isOpen = false;
      },
      products: [
        {
          id: 1,
          name: "Product 1",
          imgUrl: "",
          price: 10,
          rating: 1,
          categoryId: 1,
          quantity: 1,
        },
      ],
      toggleProduct: () => {},
      updateProductQuantity: () => {},
    };
    const { getByRole } = render(<Cart {...mockObj} />);

    const closeButton = getByRole("button", { name: "close" });
    fireEvent.click(closeButton);
    expect(mockObj.isOpen).toBe(false);
  });

  it("should show total and products list when there are products in the cart", () => {
    const mockObj = {
      isOpen: true,
      toggleOpen: () => {},
      products: [
        {
          id: 1,
          name: "Product 1",
          imgUrl: "",
          price: 10,
          rating: 1,
          categoryId: 1,
          quantity: 1,
        },
        {
          id: 2,
          name: "Product 2",
          imgUrl: "",
          price: 20,
          rating: 2,
          categoryId: 2,
          quantity: 1,
        },
      ],
      toggleProduct: () => {},
      updateProductQuantity: () => {},
    };
    const { getByText, getByRole } = render(<Cart {...mockObj} />);
    const list = getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(2);
    expect(getByText("$30")).toBeInTheDocument();
  });

  it("should show an empty message when there ano no products in the cart", () => {
    const mockObj = {
      isOpen: true,
      toggleOpen: () => {},
      products: [],
      toggleProduct: () => {},
      updateProductQuantity: () => {},
    };
    const { getByText } = render(<Cart {...mockObj} />);

    expect(getByText("Your shopping cart is empty")).toBeInTheDocument();
  });

  it("should show the backdrop when the cart is open", () => {
    const mockObj = {
      isOpen: true,
      toggleOpen: () => {},
      products: [],
      toggleProduct: () => {},
      updateProductQuantity: () => {},
    };
    const { getByLabelText } = render(<Cart {...mockObj} />);

    expect(getByLabelText("overlay")).toHaveClass("opacity-100", "z-40");
  });

  it("should not show the backdrop when the cart is closed", () => {
    const mockObj = {
      isOpen: false,
      toggleOpen: () => {},
      products: [],
      toggleProduct: () => {},
      updateProductQuantity: () => {},
    };
    const { getByLabelText } = render(<Cart {...mockObj} />);

    expect(getByLabelText("overlay")).toHaveClass(
      "opacity-0",
      "pointer-events-none"
    );
  });
});
