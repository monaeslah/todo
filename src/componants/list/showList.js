import React from "react";
import Items from "./itemList";

import { useDispatch, useSelector } from "react-redux";
 const ShowList = () => {
  const todos = useSelector((store) => store.addTodos);


  const dispatch = useDispatch();
  return (
    <>
        {todos.map((todo, index) => {
        return( 
        <>
        <Items todo={todo}  key={index} />
        </>
        )
       
      })}
    </>
  );
};
export default ShowList;
