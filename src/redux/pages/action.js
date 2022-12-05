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
export const addTodo = (todo) => ({
  type: ADD,
  payload: todo,
});
export const updateTodo = (todo) => ({
  type: UPDATE,
  payload: todo,
});

export const deletTodo = (todoId) => ({
  type: DELETE,
  payload: todoId,
});
