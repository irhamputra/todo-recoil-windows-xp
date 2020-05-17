import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onDeleteItem = () => {
    const newList = todoList.filter((list) => list.id !== item.id);

    setTodoList(newList);
  };

  return (
    <ul>
      <li>
        {item.todo} <button onClick={onDeleteItem}>Delete</button>
      </li>
    </ul>
  );
};

export default TodoItem;
