import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Header } from "./Header";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const cartData = {
  categories: [
    { id: 1, name: "Category 1", imgUrl: "", slug: "category-1" },
    { id: 2, name: "Category 2", imgUrl: "", slug: "category-2" },
  ],
  cartProducts: [],
  toggleOpen: vi.fn(),
};

describe("Header", () => {
  afterEach(cleanup);

  it("should call toggleOpen on cart icon click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Header cartData={cartData} />} />
        </Routes>
      </MemoryRouter>
    );

    const cartIcon = screen.getByLabelText("cart-icon");
    cartIcon.click();
    expect(cartData.toggleOpen).toHaveBeenCalled();
  });
});
