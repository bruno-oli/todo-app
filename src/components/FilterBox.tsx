import React, { useContext } from "react";
import styled from "styled-components";
import { TodosContext } from "../contexts/TodosContext";
import ClearCompleted from "./ClearCompleted";
import Filters from "./Filters";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bodyBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 0 0 5px 5px;
  border-top: solid 1px ${(props) => props.theme.colors.taskCompletedNameColor};
  .items__left {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    color: ${(props) => props.theme.colors.filterItemsColor};
  }
  @media only screen and (max-width: 480px) {
    justify-content: center;
    .items__left,
    .clear__completed {
      display: none;
    }
  }
`;

const FilterBox = () => {
  const { todoList } = useContext(TodosContext);
  const getIncopletedTasks = () => {
    let inconpletedTasks: number = 0;
    todoList.forEach((i) => {
      if (i.completed === false) {
        inconpletedTasks = inconpletedTasks + 1;
      }
    });
    return inconpletedTasks;
  };
  return (
    <Wrapper>
      <span className="items__left">{getIncopletedTasks()} items left</span>
      <Filters />
      <ClearCompleted />
    </Wrapper>
  );
};

export default FilterBox;
