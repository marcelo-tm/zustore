import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ItemContainer } from "../ItemContainer";

describe("ItemContainer", () => {
  afterEach(cleanup);

  it("should render item with image, children and custom className attribute", () => {
    const imgUrl = "https://via.placeholder.com/300";
    const className = "flex";
    render(
      <ItemContainer imageUrl={imgUrl} className={className}>
        <div>Children</div>
      </ItemContainer>
    );

    const container = screen.getByLabelText("item-container");
    expect(container).toHaveClass(
      "rounded-md",
      "border",
      "border-border",
      "bg-white",
      "p-5",
      "w-[300px]",
      className
    );
    const image = screen.getByAltText("Item image");
    expect(image).toHaveAttribute("src", imgUrl);
    expect(image).toHaveClass("object-contain", "h-[260px]");
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
