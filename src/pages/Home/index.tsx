import { useContext } from "react";
import { HomeButtons } from "../../components/HomeButtons";
import { MessageCard } from "../../components/MessageCard";
import MessageContext from "../../context/MessagesContext";

import { Container, MessageWrapper } from "./styles";

export const Home = () => {
  const { errorMessages, warningMessages, infoMessages } =
    useContext(MessageContext);

  return (
    <>
      <HomeButtons />
      <Container>
        <MessageWrapper>
          <h2>Error Type 1</h2>
          <h4>Count {errorMessages?.length}</h4>
          {errorMessages?.map?.((msg) => (
            <MessageCard
              id={msg?.id}
              key={msg?.id}
              message={msg?.message}
              priority={msg?.priority}
            />
          ))}
        </MessageWrapper>
        <MessageWrapper>
          <h2>Warning Type 2</h2>
          <h4>Count {warningMessages?.length}</h4>
          {warningMessages?.map?.((msg) => (
            <MessageCard
              id={msg?.id}
              key={msg?.id}
              message={msg?.message}
              priority={msg?.priority}
            />
          ))}
        </MessageWrapper>
        <MessageWrapper>
          <h2>Info Type 3</h2>
          <h4>Count {infoMessages?.length}</h4>
          {infoMessages?.map?.((msg) => (
            <MessageCard
              id={msg?.id}
              key={msg?.id}
              message={msg?.message}
              priority={msg?.priority}
            />
          ))}
        </MessageWrapper>
      </Container>
    </>
  );
};
