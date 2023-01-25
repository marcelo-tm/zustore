import "@testing-library/jest-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ButtonProps, Button } from "./Button";

describe("Button", () => {
  afterEach(cleanup);

  it("should call onClick function when clicked", () => {
    const onClick = vi.fn();
    const props: ButtonProps = {
      onClick,
      children: "Click me",
    };
    const { getByText } = render(<Button {...props} />);

    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should append className attributes when passed", () => {
    const onClick = vi.fn();
    const props: ButtonProps = {
      onClick,
      children: "Click me",
      className: "uppercase",
    };
    const { getByText } = render(<Button {...props} />);

    expect(getByText("Click me")).toHaveClass("uppercase");
  });
});
