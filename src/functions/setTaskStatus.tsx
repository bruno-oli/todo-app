import { ITodo, TodosContextTypes } from "../contexts/TodosContext";

export default function setTaskStatus(
  data: ITodo,
  { todoList, setTodoList }: TodosContextTypes
) {
  let newList: ITodo[] = [...todoList];
  newList.forEach((i) => {
    if (i.id === data.id) {
      i.completed = !i.completed;
    }
  });
  setTodoList(newList);
}
