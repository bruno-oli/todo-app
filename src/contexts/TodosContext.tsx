import React, { createContext, useState } from "react";

export interface ITodo {
  name: string;
  completed: boolean;
  id: string;
}

export interface TodosContextTypes {
  todoList: ITodo[];
  setTodoList: (newState: ITodo[]) => void;
}

const INITIAL_VALUE = {
  todoList: [],
  setTodoList: () => {},
};

export const TodosContext = createContext<TodosContextTypes>(INITIAL_VALUE);

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  return (
    <TodosContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider
