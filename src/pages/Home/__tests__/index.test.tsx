import { Home } from "../index";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render Error columns", () => {
    render(<Home />);

    expect(screen.getByText(/Error Type 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Warning Type 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Info Type 3/i)).toBeInTheDocument();
  });
});
