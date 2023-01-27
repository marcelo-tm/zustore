import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Icon } from "../Icon";

describe("Icon", () => {
  afterEach(cleanup);

  it("should render properly", () => {
    const icon = <div>Icon</div>;
    render(<Icon iconData={icon} />);

    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
