import "@testing-library/jest-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { QuantitySelector } from "./QuantitySelector";

describe("QuantitySelector", () => {
  afterEach(cleanup);

  it("should render properly", () => {
    const quantity = 1;
    const onChange = vi.fn();

    render(<QuantitySelector quantity={quantity} onChange={onChange} />);

    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("should increase value when + button is clicked", () => {
    const quantity = 1;
    const onChange = vi.fn();

    render(<QuantitySelector quantity={quantity} onChange={onChange} />);

    fireEvent.click(screen.getByText("+"));
    expect(onChange).toHaveBeenCalled();

    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it("should decrease value when + button is clicked", () => {
    const quantity = 2;
    const onChange = vi.fn();

    render(<QuantitySelector quantity={quantity} onChange={onChange} />);

    fireEvent.click(screen.getByText("-"));
    expect(onChange).toHaveBeenCalled();

    expect(screen.getByText(1)).toBeInTheDocument();
  });
});
