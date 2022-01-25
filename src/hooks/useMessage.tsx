import { useRef, useState, useCallback, useEffect } from "react";
import generateMessage, { IMessage } from "../config/Api";

export const useMessage = () => {
  const [errorMessages, setErrorMessages] = useState<IMessage[]>([]);
  const [warningMessages, setWarningMessages] = useState<IMessage[]>([]);
  const [infoMessages, setInfoMessages] = useState<IMessage[]>([]);
  const unsubscribe = useRef<() => void>();

  const saveMessages = (message: IMessage) => {
    switch (message.priority) {
      case 0:
        setErrorMessages((oldMessages) => [message, ...oldMessages]);
        break;
      case 1:
        setWarningMessages((oldMessages) => [message, ...oldMessages]);
        break;
      case 2:
        setInfoMessages((oldMessages) => [message, ...oldMessages]);
        break;
    }
  };

  const handleMessages = useCallback(() => {
    unsubscribe.current = generateMessage((message: IMessage) => {
      saveMessages(message);
    });
  }, []);

  useEffect(() => {
    handleMessages();
  }, [handleMessages]);

  const stopMessages = () => {
    unsubscribe.current?.();
  };

  const startMessages = () => {
    handleMessages();
  };

  const clearMessages = () => {
    setErrorMessages([]);
    setWarningMessages([]);
    setInfoMessages([]);
  };

  const clearMessage = (priority: number, id: string) => {
    switch (priority) {
      case 0:
        setErrorMessages(errorMessages.filter((message) => message.id !== id));
        break;
      case 1:
        setWarningMessages(
          warningMessages.filter((message) => message.id !== id)
        );
        break;
      case 2:
        setInfoMessages(infoMessages.filter((message) => message.id !== id));
        break;
    }
  };

  return {
    errorMessages,
    warningMessages,
    infoMessages,
    stopMessages,
    startMessages,
    clearMessages,
    clearMessage,
  };
};
