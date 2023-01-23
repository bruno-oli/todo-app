import React, { createContext, useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  // * Get tasks from local storage
  useEffect(() => {
    function getTodoList() {
      setTodoList(JSON.parse(localStorage.getItem("tasks") || "[]"));
      setIsLoading(false);
    }
    getTodoList();
  }, []);

  // * Save tasks in local storage
  useEffect(() => {
    function saveTodoList() {
      if (isLoading === false) {
        localStorage.setItem("tasks", JSON.stringify(todoList));
      }
    }
    saveTodoList();
  }, [todoList]);

  return (
    <TodosContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
