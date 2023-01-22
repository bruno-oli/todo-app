import { toast } from "react-toastify";
import { TodosContextTypes } from "../contexts/TodosContext";

interface KeyboardEvent<T = Element> {
  which: number;
}

export default function addask(
  e: KeyboardEvent<HTMLInputElement>,
  taskName: string,
  isChecked: boolean,
  state: TodosContextTypes
) {
  if (e.which === 13 && taskName.length > 3) {
    state.setTodoList([
      {
        name: taskName,
        completed: isChecked,
        id: crypto.randomUUID(),
      },
      ...state.todoList,
    ]);
    toast.success("Task created successfully!", {
      className: "toast-message",
    });
  } else if (taskName.length <= 3 && e.which === 13) {
    toast.error("Your task name is too short.", {
      className: "toast-message",
    });
  }
}
