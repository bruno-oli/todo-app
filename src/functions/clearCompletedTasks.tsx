import { TodosContextTypes } from "../contexts/TodosContext";

export default function clearCompletedTasks({
  todoList,
  setTodoList,
}: TodosContextTypes) {
  setTodoList(
    todoList.filter((i) => {
      return i.completed === false;
    })
  );
}
