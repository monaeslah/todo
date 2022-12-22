import React from "react";
import { updateTodo, deletTodo } from "../../redux/pages/action";
import iconCross from "../../assets/img/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
const ShowList = (props) => {
  const todos = useSelector((store) => store.addTodos);
  console.log(todos);
  const dispatch = useDispatch();
  const delet = (id) => {
    console.log("id", id);
    dispatch(deletTodo(id));
  };
  const controlComplete = (id) => {
    props.setCompleted(!props.completed);
    dispatch(updateTodo(id));
    console.log(id);
  };
  return (
    <>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => {
            return todo?.completed === false ? (
              <li key={index} className="flex align-center" onClick={() => controlComplete(todo.id)}>
                <input
                  className="checkbox"
                  type="checkbox"
                  onClick={() => controlComplete(todo.id)}
                  defaultChecked={props.completed}
                />
               {todo.title}

                <img src={iconCross} alt="" onClick={() => delet(todo.id)} />
              </li>
            ) : (
              <li
                key={index}
                className={`flex align-center ${
                  props.completed ? "completed" : ""
                }`}
                draggable={true}
                onClick={() => controlComplete(todo.id)}
              >
                <input
                  type="checkbox"
                  onClick={() => controlComplete(todo.id)}
                />
                {todo.title}
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
