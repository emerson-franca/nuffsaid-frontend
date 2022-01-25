import React, { useContext, useState } from "react";
import MessageContext from "../../context/MessagesContext";
import { Container, ActionButton } from "./styles";

export const HomeButtons: React.VFC = () => {
  const [isStart, setIsStart] = useState(false);
  const { stopMessages, startMessages, clearMessages } =
    useContext(MessageContext);

  const buttonMessage = isStart ? "START" : "STOP";

  const handleClick = () => {
    if (isStart) {
      startMessages();
    } else {
      stopMessages();
    }
    setIsStart(!isStart);
  };

  return (
    <Container>
      <ActionButton variant="contained" color="primary" onClick={handleClick}>
        {buttonMessage}
      </ActionButton>
      <ActionButton
        variant="contained"
        color="primary"
        onClick={() => clearMessages()}
      >
        CLEAR
      </ActionButton>
    </Container>
  );
};

export const MemoButtons = React.memo(HomeButtons);
