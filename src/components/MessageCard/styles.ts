import styled from "styled-components";
import { Priority } from "../../config/Api";
import { Button } from "@material-ui/core";

type ContainerType = {
  priority: Priority;
};

const COLORS = {
  0: "#F56236",
  1: "#FCE788",
  2: "#88FCA3",
};

export const Container = styled.div<ContainerType>`
  border-radius: 4px;
  background-color: ${(props) => COLORS[props.priority]};
  padding: 10px;
  height: 80px;
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 3px 1px -2px rgb(0 0 0 / 12%);
`;

export const Message = styled.p`
  flex: 1;
  margin-bottom: 10px;
`;

export const ClearButton = styled(Button)`
  && {
    text-transform: initial;
    margin-top: 20px;
  }
`;
