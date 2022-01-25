import { MessageCard } from "../index";
import { render, screen } from "@testing-library/react";

const MOCK = { message: "Button Message", priority: 1, id: "123456" };

describe("MessageCard", () => {
  it("should render CLEAR button", () => {
    render(<MessageCard {...MOCK} />);

    expect(screen.getByText(/CLEAR/i)).toBeInTheDocument();
  });

  it("should render card message", () => {
    render(<MessageCard {...MOCK} />);

    expect(screen.getByText(/Button Message/i)).toBeInTheDocument();
  });
});
