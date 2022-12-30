import React, { useRef, useState,useEffect } from "react";
import { setStateAction, updateTodo } from "../../redux/pages/action";
import iconCross from "../../assets/img/icon-cross.svg";
import { useDispatch, useSelector } from "react-redux";
const ShowList = (props) => {
  const dispatch = useDispatch();
  
  const [items, setItems] = useState(props.todos);
  useEffect(() => {
    setItems(props.todos);
  }, [props.todos])
  const controlComplete = (id) => {
    dispatch(updateTodo(id));
  };

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...items];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    
    setItems(copyListItems);
    dispatch(setStateAction(copyListItems));
    console.log("index", items);
  };
  
  
  return (
    <>
      <div className="todo-list">
        
        <ul>
          {items
            .filter((todo) => {
              if (props.filter === "Complete") return todo.completed;
              if (props.filter === "Active") {
                return !todo.completed;
              }
              return true;
            })
            .map((todo, index) => {
              return (
                <li
                  className={`flex align-center ${
                    todo.completed ? "completed" : ""
                  }`}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  key={index}
                  data-index={index}
                  draggable
                >
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={() => controlComplete(todo.id)}
                    checked={todo.completed}
                  />
                  <p onClick={() => controlComplete(todo.id)}>{todo.title}</p>

                  <img
                    src={iconCross}
                    alt=""
                    onClick={() => props.delet(todo.id)}
                  />
                </li>
              );
            })}
        </ul>

        <div className="flex filter align-center space-between">
          {!(items.length === 0) ? 
          (
            <p>{items.length} items left</p>
          ) :
           (
            <div className="empty">
              
            </div>
          )}
          <div className="flex align-center">
            <button
              value="All"
              className={`${props.filter === "All" ? "active" : ""}`}
              onClick={props.setF}
            >
              All
            </button>

            {/* onClick={filterControl} */}
            <button
              value="Active"
              className={`${props.filter === "Active" ? "active" : ""}`}
              onClick={props.setF}
            >
              Active
            </button>
            <button
              value="Complete"
              className={`${props.filter === "Complete" ? "active" : ""}`}
              onClick={props.setF}
            >
              Completed
            </button>
          </div>
          <button onClick={props.clearAll}>Clear Completed</button>
        </div>
      </div>
      <p className="flex justfy-center">Drag and drop to reorder list</p>
    </>
  );
};
export default ShowList;
