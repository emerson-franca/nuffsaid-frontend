import { Header } from "../index";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render on app init", () => {
    render(<Header />);

    expect(
      screen.getByText(/nuffsaid.com Coding Challenge/i)
    ).toBeInTheDocument();
  });
});
