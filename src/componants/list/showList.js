import React from "react";
import { updateTodo, deletTodo } from "../../redux/pages/action";
import iconCross from "../../assets/img/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
const ShowList = (props) => {
  const todos = useSelector((store) => store.addTodos);
  console.log(todos);
  const dispatch = useDispatch();
  const delet = (id) => {
   
    dispatch(deletTodo(id));
  };
  const controlComplete = (id) => {
   
    dispatch(updateTodo(id));
    
  };





  return (
    <>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => {
            return todo?.completed === false ? (
              <li
              className="flex align-center"
              key={index}
                draggable={true}
            
                
              >
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => controlComplete(todo.id)}
                  checked={todo.completed}
                />
                <p      onClick={() => controlComplete(todo.id)}>{todo.title}</p>

                <img src={iconCross} alt="" onClick={() => delet(todo.id)} />
              </li>
            ) : (
              <li
              className="flex align-center completed"
              key={index}
              draggable={true}
              
                
          
              >
                <input
                  type="checkbox"
                  onChange={() => controlComplete(todo.id)}
                  checked={todo.completed}
                />
                 <p       onClick={() => controlComplete(todo.id)}>{todo.title}</p>
                <img src={iconCross} alt="" onClick={() => delet(todo.id)} />
              </li>
            );
          })}
        </ul>
        {!(todos.length === 0) ? (
          <div className="filter flex align-center space-between">
            <p>{todos.length} items left</p>
            <div className="flex align-center">
              <button value="All" className="active">
                All
              </button>

              {/* onClick={filterControl} */}
              <button value="Active" onClick={props.setFilter}>
                Active
              </button>
              <button value="Completed">Completed</button>
            </div>
            <button>Clear Completed</button>
          </div>
        ) : (
          <>
            <div className="empty">
              <h2>Add some Todos to the list...</h2>
            </div>
            <div className="filter flex align-center space-between">
              <p>0 items left</p>
              <div className="flex align-center">
                <button value="All" className="active">
                  All
                </button>
                <button value="Active">Active</button>
                <button value="Completed">Completed</button>
              </div>
              <button>Clear Completed</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ShowList;
