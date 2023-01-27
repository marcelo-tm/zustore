import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { IconButton } from "../IconButton";

describe("IconButton", () => {
  afterEach(cleanup);

  it("should render children and call onClick", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <IconButton onClick={onClick}>Click me</IconButton>
    );

    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
