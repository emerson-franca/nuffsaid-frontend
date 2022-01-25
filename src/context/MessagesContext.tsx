import React, { createContext } from "react";
import { IMessage } from "../config/Api";
import { useMessage } from "../hooks/useMessage";

type MessageContextType = {
  errorMessages: IMessage[];
  warningMessages: IMessage[];
  infoMessages: IMessage[];
  stopMessages: () => void;
  startMessages: () => void;
  clearMessages: () => void;
  clearMessage: (priority: number, id: string) => void;
};

const MessageContext = createContext<MessageContextType>(
  {} as MessageContextType
);

export const MessageContextProvider: React.FC = ({ children }) => {
  const {
    errorMessages,
    warningMessages,
    infoMessages,
    stopMessages,
    startMessages,
    clearMessages,
    clearMessage,
  } = useMessage();

  return (
    <MessageContext.Provider
      value={{
        errorMessages,
        warningMessages,
        infoMessages,
        stopMessages,
        startMessages,
        clearMessages,
        clearMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
