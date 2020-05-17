import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import TodoListStats from "./TodoListStats";
import { todoListState } from "../atoms/todoListState";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="window-body">
      <TodoInput />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}

      <TodoListStats />
    </div>
  );
};

export default TodoList;
