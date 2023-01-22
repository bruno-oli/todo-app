import React, { useContext } from "react";
import styled from "styled-components";
import FilterBox from "../components/FilterBox";
import HeaderTodo from "../components/HeaderTodo";
import InputNewTodo from "../components/InputNewTodo";
import TodoList from "../components/TodoList";
import FiltersProvider from "../contexts/FiltersContext";
import { TodosContext } from "../contexts/TodosContext";

const Wrapper = styled.main`
  width: 541px;
  display: flex;
  flex-direction: column;
`;

const TodoContainer = () => {
  const { todoList } = useContext(TodosContext);
  return (
    <Wrapper>
      <HeaderTodo />
      <InputNewTodo />
      <FiltersProvider>
        <TodoList />
        {todoList.length >= 1 && <FilterBox />}
      </FiltersProvider>
    </Wrapper>
  );
};

export default TodoContainer;
