import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CategoryItem } from "../CategoryItem";

describe("CategoryItem", () => {
  afterEach(cleanup);

  it("should render the category with image, name and onClick", () => {
    const category = {
      id: 1,
      name: "Category 1",
      imgUrl: "https://via.placeholder.com/300",
      slug: "category1",
      banner: "",
    };
    const onClick = vi.fn();

    render(<CategoryItem category={category} onClick={onClick} />);

    const container = screen.getByLabelText("item-container");
    expect(container).toHaveClass(
      "relative",
      "group",
      "overflow-hidden",
      "flex",
      "justify-center",
      "items-center",
      "h-[300px]"
    );
    const img = screen.getByAltText("Item image");
    expect(img).toHaveAttribute("src", category.imgUrl);
    const button = screen.getByText(category.name);
    expect(button).toBeInTheDocument();
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
