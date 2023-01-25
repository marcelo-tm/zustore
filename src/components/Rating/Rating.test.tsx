import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Rating } from "./Rating";

describe("Rating", () => {
  afterEach(cleanup);

  it("should displey the corret number os filled and hollow stars", () => {
    render(<Rating id={1} rating={3} />);
    const filledStars = screen.queryAllByLabelText("star");
    const hollowStars = screen.queryAllByLabelText("hollow-star");

    expect(filledStars).toHaveLength(3);
    expect(hollowStars).toHaveLength(2);
  });
});
