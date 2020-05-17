import { atom } from "recoil";

// initial state
export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: 1,
      todo: "Learn Recoil",
      isCompleted: true,
    },
  ],
});
