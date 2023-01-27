import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Footer } from "../Footer";

describe("Footer", () => {
  afterEach(cleanup);

  it("should render properly", () => {
    render(<Footer />);

    const innerWrapper = screen.getByLabelText("inner-wrapper");
    expect(innerWrapper).toHaveClass("flex", "justify-between", "items-center");
    const logo = screen.getByAltText("Zustand Store");
    expect(logo).toHaveAttribute("style", "height: 50px;");
    expect(logo).toHaveAttribute("src", "/src/assets/zustore_logo_white.png");
  });
});
