import { INCREASE, DECREASE, RESET, ADD, DELETE, UPDATE } from "./type";



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
export let todos = [
  {
 
    title: 'one'

  },
  {
  
    title: 'two'

  }
]
export const addTodos = (state = todos, action) => {
  let newTodos
  switch (action.type) {
    case ADD:
      newTodos = [...state];
      newTodos.push(action.payload)

      return newTodos;

    case DELETE:
      newTodos = [...state]
      newTodos = newTodos.filter(todo => todo.id != action.payload)
      return newTodos
      case UPDATE:
        newTodos=[...state];
        let index =-1;
        for(let i=0;i<newTodos.length;i++){
          index++;
          if(newTodos[i].id== action.payload.id){
            break
          }
        }
        console.log(index);
        if(index != -1){
         
            newTodos[index] = action.payload;
            console.log("ddd",newTodos);
            return newTodos
          
        }
    default:
      return state;
  }


}
