import { toast } from "react-toastify";
import {
  TodosContextTypes,
} from "../contexts/TodosContext";

export default function removeTask(
  data: { name: string; completed: boolean; id: string },
  state: TodosContextTypes
) {
  const filteredList = state.todoList.filter((i) => {
    return i.id !== data.id;
  });
  toast.success("Task removed successfully!", {
    className: "toast-message",
  });
  state.setTodoList(filteredList);
}
