import React, { useContext } from "react";
import styled from "styled-components";
import { FiltersContext } from "../contexts/FiltersContext";
import { ITodo, TodosContext } from "../contexts/TodosContext";
import TodoCard from "./TodoCard";

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bodyBackground};
  box-shadow: 0px 35px 50px -15px ${(props) => props.theme.colors.boxShadow};
  border-radius: 5px 5px 0 0;
  margin-top: 24px;
  & > div {
    :not(:last-child) {
      border-bottom: solid 1px
        ${(props) => props.theme.colors.taskCompletedNameColor};
    }
  }
`;

const TodoList = () => {
  const { todoList } = useContext(TodosContext);
  const { filterAll, filterActive, filterCompleted } =
    useContext(FiltersContext);

  const filteredActive = todoList.filter((i) => {
    return i.completed === false;
  });

  const filteredCompleted = todoList.filter((i) => {
    return i.completed === true;
  });

  return (
    <Wrapper>
      {filterAll && (
        <div>
          {todoList.map((i) => {
            return <TodoCard key={i.id} data={i} />;
          })}
        </div>
      )}
      {filterActive && (
        <div>
          {filteredActive.map((i) => {
            return <TodoCard key={i.id} data={i} />;
          })}
        </div>
      )}
      {filterCompleted && (
        <div>
          {filteredCompleted.map((i) => {
            return <TodoCard key={i.id} data={i} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default TodoList;
