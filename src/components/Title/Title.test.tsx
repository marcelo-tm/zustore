import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Title } from "./Title";

describe("Title", () => {
  afterEach(cleanup);

  it("should render properly", () => {
    render(<Title label="Title" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should append className attributes when passed", () => {
    render(<Title label="Title" className="uppercase" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Title")).toHaveClass("uppercase");
  });
});
