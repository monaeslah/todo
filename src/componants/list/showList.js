import React from "react";
import Items from "./itemList";
import { updateTodo, deletTodo } from "../../redux/pages/action";
import { useDispatch, useSelector } from "react-redux";
const ShowList = ({ clear, filterControl }) => {
  const todos = useSelector((store) => store.addTodos);


  const dispatch = useDispatch();
  return (
    <>
      <div className="todo-list">

        <ul>
          {todos.map((todo, index) => {
            return todo.completed === false ?

              (<li className="flex align-center">
                <Items todo={todo} key={index} />
              </li>) : (

                <li
                  className="flex align-center completed"
                  draggable={true}
            
                >
                  <input
                    type="checkbox"
                   
                  />
                  <p>todo.value</p>
                  <img
                    src="./images/icon-cross.svg"
                    alt=""
                  
                  />
                </li>

              )
          }

          )

          }

        </ul>
        {!(todos.length === 0) ? (
          <div className="filter flex align-center space-between">
            <p>{todos.length} items left</p>
            <div className="flex align-center">
              <button
                value="All"
                className="active"
                onClick={filterControl}
              >
                All
              </button>
              <button value="Active" onClick={filterControl}>
                Active
              </button>
              <button value="Completed" onClick={filterControl}>
                Completed
              </button>
            </div>
            <button onClick={clear}>Clear Completed</button>
          </div>
        ) : (
          <>
            <div className="empty">
              <h2>Add some Todos to the list...</h2>
            </div>
            <div className="filter flex align-center space-between">
              <p>0 items left</p>
              <div className="flex align-center">
                <button
                  value="All"
                  className="active"
                  onClick={filterControl}
                >
                  All
                </button>
                <button value="Active" onClick={filterControl}>
                  Active
                </button>
                <button value="Completed" onClick={filterControl}>
                  Completed
                </button>
              </div>
              <button onClick={clear}>Clear Completed</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ShowList;
