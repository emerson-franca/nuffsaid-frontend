import { HomeButtons } from "../index";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageContext from "../../../context/MessagesContext";

const mock = {
  stopMessages: jest.fn(),
};

describe("HomeButtons", () => {
  it("should render STOP and CLEAR button", () => {
    render(<HomeButtons />);

    expect(screen.getByText(/STOP/i)).toBeInTheDocument();
    expect(screen.getByText(/CLEAR/i)).toBeInTheDocument();
  });

  it("should call stopMessages after click on STOP button", () => {
    const { getByText } = render(
      <MessageContext.Provider value={mock as any}>
        <HomeButtons />
      </MessageContext.Provider>
    );

    const button = getByText(/STOP/i);
    fireEvent.click(button);

    expect(mock.stopMessages).toBeCalledTimes(1);
  });
});
