import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState); // get states
    const totalTodos = todoList.length;

    // define here another stats

    return {
      totalTodos,
    };
  },
});
