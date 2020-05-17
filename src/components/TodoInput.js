import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { v4 as uuid } from "uuid";
import TodoReset from "./TodoReset";

const TodoInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const addTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    const newTodo = {
      id: uuid(),
      todo: inputValue,
      isCompleted: false,
    };

    addTodoList((prevState) => [...prevState, newTodo]);

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input value={inputValue} onChange={onChange} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <TodoReset />
    </div>
  );
};

export default TodoInput;
