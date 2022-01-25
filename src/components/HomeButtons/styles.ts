import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  margin-bottom: 50px;
`;

export const ActionButton = styled(Button)`
  && {
    margin-right: 10px;
  }
`;
