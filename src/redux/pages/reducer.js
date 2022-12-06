import { INCREASE, DECREASE, RESET, ADD, DELETE, UPDATE } from "./type";
import { uniqueId } from './action';



// REDUCER counting
export const counter = (state = 0, action) => {

  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};
// TASKS

export const addTodos = (state =  [] , action) => {

  switch (action.type) {
    case ADD:
      console.log([...state,action.payload])
      return [...state,action.payload]
    case 
    DELETE:
    console.log("dtate",state,action)
    return  state.filter((item, index) => item.id !== action.id )
     
    default:
      return state;
  }


}
