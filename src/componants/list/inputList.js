import React, { useState } from "react";
import {v1 as uuid} from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addTodo} from "../../redux/pages/action";

export const InputTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    setTitle(e.target.value);
  };
  const addList = () => {
   
    
  };
  return (
    <div className="list-inp">
      <input value={title} onChange={handleTodo} />

      <input
        type="submit"
        value="Submit"
        onClick={() => {dispatch( addTodo(
          {
            
            title:title
          }
        ));
        setTitle('')
      }}
      ></input>
    </div>
  );
};

export default InputTodo;
