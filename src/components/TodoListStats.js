import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selectors/todoListStats";

const TodoListStats = () => {
  const { totalTodos } = useRecoilValue(todoListStatsState);

  return (
    <>
      <p>Total list: {totalTodos}</p>
    </>
  );
};

export default TodoListStats;
