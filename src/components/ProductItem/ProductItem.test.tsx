import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProductItem } from "./ProductItem";

describe("ProductItem", () => {
  afterEach(cleanup);

  it("should render the product item with image, name, price, oldPrice, rating and onClick", () => {
    const product = {
      id: 1,
      name: "Product 1",
      imgUrl: "https://via.placeholder.com/300",
      price: 20,
      oldPrice: 10,
      rating: 4,
      categoryId: 1,
    };
    const onClick = vi.fn();
    render(<ProductItem product={product} onClick={onClick} />);

    const image = screen.getByAltText("Item image");
    expect(image).toHaveAttribute("src", product.imgUrl);
    const name = screen.getByText(product.name);
    expect(name).toBeInTheDocument();
    const price = screen.getByText(`$${product.price}`);
    expect(price).toBeInTheDocument();
    const oldPrice = screen.getByText(`$${product.oldPrice}`);
    expect(oldPrice).toBeInTheDocument();
    const rating = screen.getByLabelText("rating");
    expect(rating).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should not render old price, if attribute is not informed", () => {
    const product = {
      id: 1,
      name: "Product 1",
      imgUrl: "https://via.placeholder.com/300",
      price: 20,
      rating: 4,
      categoryId: 1,
    };
    const onClick = vi.fn();
    render(<ProductItem product={product} onClick={onClick} />);

    expect(screen.queryByLabelText("old-price")).not.toBeInTheDocument();
  });
});
