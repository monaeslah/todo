import React from "react";
import Items from "./itemList";

import { useDispatch, useSelector } from "react-redux";
 const ShowList = () => {
  const todos = useSelector((state) => state.addTodos);
  console.log("todos", todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter-value">itemList</div>

      {todos.map((todo, index) => {
        return <Items key={index} todo={todo} />;
       
      })}
    </>
  );
};
export default ShowList;
