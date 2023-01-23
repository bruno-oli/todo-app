import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import iconCheck from "../assets/iconCheck.svg";
import iconCross from "../assets/iconCross.svg";
import { ITodo, TodosContext } from "../contexts/TodosContext";
import removeTask from "../functions/removeTask";
import setTaskStatus from "../functions/setTaskStatus";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  height: 63px;
  padding: 0 24px;
  position: relative;
  &.completed {
    div {
      background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
      border: none;
    }
    span {
      color: ${(props) => props.theme.colors.taskCompletedNameColor};
      &::before {
        width: 100%;
      }
    }
  }
  .status__toggle {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.colors.checkIconBorderColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-color: ${(props) => props.theme.colors.taskNameColor};
    }
  }
  span {
    color: ${(props) => props.theme.colors.taskNameColor};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    max-width: 85%;
    &::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.taskCompletedNameColor};
      top: calc(50% - 1px);
      transition: width 0.3s;
    }
  }
  & > img {
    cursor: pointer;
    position: absolute;
    right: 24px;
  }
`;

const TodoCard = ({
  data,
}: {
  data: { name: string; completed: boolean; id: string };
}) => {
  const { setTodoList, todoList } = useContext(TodosContext);
  return (
    <Wrapper className={`${data.completed ? "completed" : ""}`}>
      <div
        className="status__toggle"
        onClick={() => setTaskStatus(data, { todoList, setTodoList })}
      >
        {data.completed && <img src={iconCheck} alt="" />}
      </div>
      <span>{data.name}</span>
      <img
        onClick={() => removeTask(data, { setTodoList, todoList })}
        src={iconCross}
        alt=""
      />
    </Wrapper>
  );
};

export default TodoCard;
