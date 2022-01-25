import React from "react";
import { Header } from "./components/Header";
import { MessageContextProvider } from "./context/MessagesContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globa";

const App: React.FC = () => {
  return (
    <MessageContextProvider>
      <GlobalStyle />
      <Header />
      <Home />
    </MessageContextProvider>
  );
};

export default App;
