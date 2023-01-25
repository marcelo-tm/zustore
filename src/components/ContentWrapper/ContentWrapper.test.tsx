import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContentWrapper } from "./ContentWrapper";

describe("ContentWrapper", () => {
  afterEach(cleanup);

  it("should render the children with default classes", () => {
    render(
      <ContentWrapper>
        <div>Children</div>
      </ContentWrapper>
    );

    expect(screen.getByText("Children")).toBeInTheDocument();
    const wrapper = screen.getByLabelText("content-wrapper");
    expect(wrapper).toHaveClass("flex", "justify-center", "w-full");
    const innerWrapper = screen.getByLabelText("inner-wrapper");
    expect(innerWrapper).toHaveClass("max-w-5xl", "w-full", "p-5");
  });

  it("should render the children with row and center classes", () => {
    render(
      <ContentWrapper row center>
        <div>Children</div>
      </ContentWrapper>
    );

    expect(screen.getByText("Children")).toBeInTheDocument();
    const innerWrapper = screen.getByLabelText("inner-wrapper");
    expect(innerWrapper).toHaveClass("flex", "justify-between", "items-center");
  });
});
