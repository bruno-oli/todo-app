import { toast } from "react-toastify";
import { TodosContextTypes } from "../contexts/TodosContext";

export default function clearCompletedTasks({
  todoList,
  setTodoList,
}: TodosContextTypes) {
  let totalCompletedTasks = 0;
  todoList.forEach((i) => {
    if (i.completed === true) {
      totalCompletedTasks += 1;
    }
  });
  setTodoList(
    todoList.filter((i) => {
      return i.completed === false;
    })
  );
  if (totalCompletedTasks > 0) {
    toast.success(`${totalCompletedTasks} completed tasks have been removed!`, {
      className: "toast-message",
    });
  } else {
    toast.error(`There are no completed tasks to be removed.`, {
      className: "toast-message",
    });
  }
}
