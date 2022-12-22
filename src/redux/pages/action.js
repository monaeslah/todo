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
  return Math.random()*1000;
}

export const createTask = (title,completed) => ({
  type: ADD,
  payload: { id: uniqueId(),completed,title}
});






export const updateTodo = (id) => ({
 
  type: UPDATE,
   id
});

export const deletTodo = (id) =>( {
 
  type: DELETE,
   id,
})
