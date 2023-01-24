import React, { useContext } from "react";
import styled from "styled-components";
import { TodosContext } from "../contexts/TodosContext";
import clearCompletedTasks from "../functions/clearCompletedTasks";

const Wrapper = styled.button.attrs({
  className: "clear__completed",
})`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  letter-spacing: -0.194444px;
  color: ${(props) => props.theme.colors.filterItemsColor};
  :hover {
    color: ${(props) => props.theme.colors.taskNameColor};
  }
`;

const ClearCompleted = () => {
  const { setTodoList, todoList } = useContext(TodosContext);
  return (
    <Wrapper onClick={() => clearCompletedTasks({ todoList, setTodoList })}>
      Clear Completed
    </Wrapper>
  );
};

export default ClearCompleted;
