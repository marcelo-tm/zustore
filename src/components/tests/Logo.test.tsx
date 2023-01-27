import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Logo } from "../Logo";

describe("Logo", () => {
  afterEach(cleanup);

  it("should render default variation properly", () => {
    render(<Logo />);

    const logo = screen.getByAltText("Zustand Store");
    expect(logo).toHaveAttribute("style", "height: 60px;");
    expect(logo).toHaveAttribute("src", "/src/assets/zustore_logo.png");
  });

  it("should render white variation properly", () => {
    render(<Logo white />);

    const logo = screen.getByAltText("Zustand Store");
    expect(logo).toHaveAttribute("style", "height: 60px;");
    expect(logo).toHaveAttribute("src", "/src/assets/zustore_logo_white.png");
  });

  it("should render with custom height", () => {
    render(<Logo height={40} />);

    const logo = screen.getByAltText("Zustand Store");
    expect(logo).toHaveAttribute("style", "height: 40px;");
    expect(logo).toHaveAttribute("src", "/src/assets/zustore_logo.png");
  });
});
