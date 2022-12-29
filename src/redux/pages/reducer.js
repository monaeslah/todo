import { INCREASE, DECREASE, RESET, ADD, DELETE, UPDATE } from "./type";
import { uniqueId } from "./action";

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
let tasks = [];
export const addTodos = (state = [], action) => {
  switch (action.type) {
    case ADD:
      console.log([...state, action.payload]);

      return [...state, action.payload];
    case UPDATE:
      return state.map((item) => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    case DELETE:
      return state.filter((item, index) => item.id !== action.id);
    case "ALLCM":
      return state.filter((item) => {
        if (item.completed === true) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};
