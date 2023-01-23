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
  if (totalCompletedTasks > 0) {
    toast.success(
      `${totalCompletedTasks} completed ${
        totalCompletedTasks > 1 ? "tasks" : "task"
      } have been removed!`,
      {
        className: "toast-message",
      }
    );
    setTodoList(
      todoList.filter((i) => {
        return i.completed === false;
      })
    );
  } else {
    toast.error(`There are no completed tasks to be removed.`, {
      className: "toast-message",
    });
  }
}
