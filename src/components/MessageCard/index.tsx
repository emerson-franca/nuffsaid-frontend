import { Slide, Snackbar } from "@material-ui/core";
import { useContext, useState } from "react";
import { IMessage } from "../../config/Api";
import MessageContext from "../../context/MessagesContext";
import { ClearButton, Container, Message } from "./styles";

export const MessageCard: React.VFC<IMessage> = ({ message, priority, id }) => {
  const [showSnackBar, setShowSnackBar] = useState(priority === 0);
  const { clearMessage } = useContext(MessageContext);

  return (
    <Container onClick={() => clearMessage(priority, id)} priority={priority}>
      <Message>{message}</Message>
      <ClearButton>Clear</ClearButton>

      <Snackbar
        open={showSnackBar}
        autoHideDuration={2000}
        message={message}
        onClose={() => setShowSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      />
    </Container>
  );
};
