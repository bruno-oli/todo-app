import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

// * Context
import { TodosContext } from "../contexts/TodosContext";

import CheckIcon from "./CheckIcon";
import addTask from "../functions/addTask";

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: ${(props) => props.theme.colors.bodyBackground};
  box-shadow: 0px 35px 50px -15px ${(props) => props.theme.colors.boxShadow};
  border-radius: 5px;

  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;

  .toast-message {
    background: ${(props) => props.theme.colors.bodyBackground};
    color: ${(props) => props.theme.colors.taskNameColor};
  }

  input {
    border: none;
    outline: none;
    background: none;
    width: 80%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.25px;
    color: ${(props) => props.theme.colors.taskNameColor};
    ::placeholder {
      color: ${(props) => props.theme.colors.filterItemsColor};
    }
  }
`;

const InputNewTodo = () => {
  // * States
  const [isChecked, setIsChecked] = useState(false);
  const [taskName, setTaskName] = useState("");

  // * Context
  const { todoList, setTodoList } = useContext(TodosContext);

  return (
    <Wrapper>
      <CheckIcon isChecked={isChecked} setIsChecked={setIsChecked} />
      <input
        onKeyDown={(e) =>
          addTask(e, taskName, isChecked, { todoList, setTodoList })
        }
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        placeholder="Create a new todo..."
        type="text"
      />
      <ToastContainer />
    </Wrapper>
  );
};

export default InputNewTodo;
