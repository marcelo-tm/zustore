import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeaderCartIcon } from "./HeaderCartIcon";

describe("HeaderCartIcon", () => {
  afterEach(cleanup);

  it("should render the icon and quantity", () => {
    const icon = <div>Icon</div>;
    const quantity = 3;

    render(<HeaderCartIcon icon={icon} quantity={quantity} />);

    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
