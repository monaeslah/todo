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

let _id = 1;
export function uniqueId() {
  return Math.random()*1000;
}

export const createTask = (title) => ({
  type: ADD,
  payload: { id: uniqueId(),title}
});






export const updateTodo = ({title}) => ({
  type: UPDATE,
  payload: title
});

export const deletTodo = (id) => {
  console.log("delet",id)
  
  return ({
  type: DELETE,
   id,
})}
