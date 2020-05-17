import React from "react";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { todoListStatsState } from "../selectors/todoListStats";

const TodoReset = () => {
  const resetList = useResetRecoilState(todoListState);
  const { totalTodos } = useRecoilValue(todoListStatsState);
  return <>{totalTodos > 0 && <button onClick={resetList}>Reset</button>}</>;
};

export default TodoReset;
