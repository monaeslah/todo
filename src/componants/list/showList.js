import React from "react";
import { updateTodo, deletTodo , clearAllcompleted} from "../../redux/pages/action";
import iconCross from "../../assets/img/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
const ShowList = (props) => {
 
  
  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(deletTodo(id));
  };
  const controlComplete = (id) => {
    dispatch(updateTodo(id));
  };
  const clearAll=()=>{

 
    dispatch(clearAllcompleted())
  }

  return (
    <>
      <div className="todo-list">
        {console.log(props.todos)}
        <ul>
          {props.todos.filter(todo=>{
            if(props.filter=="Complete")
              return todo.completed
            if(props.filter=="Active"){
              return !todo.completed
            }
            return true
          }).map((todo, index) => {
          

            return  (
              <li className={`flex align-center ${todo.completed?"completed":""}`} key={index}>
            
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => controlComplete(todo.id)}
                  checked={todo.completed}
                />
                <p onClick={() => controlComplete(todo.id)}>{todo.title}</p>

                <img src={iconCross} alt="" onClick={() => delet(todo.id)} />
              </li>
            ) 
          })}
        </ul>

        <div className="filter align-center space-between">
          {!(props.todos.length === 0) ? (
            <p>{props.todos.length} items left</p>
          ) : (
            <div className="empty">
              <h2>Add some Todos to the list...</h2>
            </div>
          )}
          <div className="flex align-center">
            <button value="All"
             className={`${props.filter==='All'?"active":""}`}
              onClick={props.setF}>
              All
            </button>

            {/* onClick={filterControl} */}
            <button value="Active" 
             className={`${props.filter==='Active'?"active":""}`}
              onClick={props.setF}>
              Active
            </button>
            <button value="Complete" 
              className={`${props.filter==='Complete'?"active":""}`}
               onClick={props.setF}>
              Completed
            </button>
          </div>
          <button   onClick={()=>clearAll()}>Clear Completed</button>
        </div>
      </div>
    </>
  );
};
export default ShowList;
