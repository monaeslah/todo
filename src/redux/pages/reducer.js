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
let tasks=[]
export const addTodos = (state =  [] , action) => {

  switch (action.type) {
    case ADD:
      console.log([...state,action.payload])
      
      return [...state,action.payload]
      case UPDATE:
     
      return state.map((item) => {
        if (item.id === action.id) {
          item.completed = !item.completed
       

        }
        
        return item
      })
        
        //sort doent work
        // const item =state.filter((item)=>(item.id === action.id))[0]
        // const index = state.findIndex(item => item.id === action.id)
        // item.completed=item.completed===false?true:false
        // console.log(item)
        // return [
        //   ...state.filter((item)=>(item.id !== action.id)),
        //  item]
        

    case 
    DELETE:
    console.log("newState",state,action.id)
    return  state.filter((item, index) => item.id !== action.id )
     
    default:
      return state;
  }


}
// const item =state.filter((item)=>(item.id === action.id))[0]
// item.completed=item.completed===false?true:false
// console.log(item)
// return [
//   ...state.filter((item)=>(item.id !== action.id)),
//  item]
