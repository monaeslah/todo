import {  ADD, DELETE, UPDATE ,SET, ALLCM} from "./type";
///counting


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
  type: ALLCM,
});
export const setStateAction = (item) => ({
  type: SET,
  payload:item
});
