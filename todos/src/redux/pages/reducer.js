import { INCREASE, DECREASE, RESET, ADD, DELETE, UPDATE } from "./type";
import { uniqueId } from "./action";


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
      case "SET":
        console.log("drage",action.payload);
  
        return action.payload;
    default:
      return state;
  }
};

