import { INCREASE, DECREASE, RESET, ADD, DELETE, UPDATE } from "./type";
///counting
export const addCount = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const reset = (payload) => ({
  type: RESET,
});

///tasks

export function uniqueId() {
  return Math.random() * 1000;
}

export const createTask = (title, completed) => ({
  type: ADD,
  payload: { id: uniqueId(), title, completed },
});

export const filterByComplete = () => ({
  type: "COMPLETE",
});

export const filterByAll = () => ({
  type: "ALL",
});
export const filterByActive = () => ({
  type: "ACTIVE",
});
export const updateTodo = (id) => ({
  type: UPDATE,
  id,
});

export const deletTodo = (id) => ({
  type: DELETE,
  id,
});
export const clearAllcompleted = () => ({
  type: "ALLCM",
});
export const setStateAction = () => ({
  type: "SET",
});
