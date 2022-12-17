import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import moon from "../../assets/img/icon-moon.svg";
import sun from "../../assets/img/icon-sun.svg";
import { createTask } from "../../redux/pages/action";

export const InputTodo = (props) => {
  const [title, setTitle] = useState([]);

  const mod = props.darkMode;
  const dispatch = useDispatch();
  
  const Title = (e) => {
    setTitle(e.target.value);
  };
  
  const Submit = () => {
    dispatch(createTask(title));
  };
  return (
    <>
    {console.log("mood",props)}
      <div className="flex align-center space-between">
        <h1>TODO</h1>
        {!mod ? (
          <img src={moon} alt="" onClick={() => props.onChange(!mod)} />
        ) : (
          <img src={sun} alt="" onClick={() => props.onChange(!mod)} />
        )}
      </div>
      <div className="todo-input ">
        <input value={title} onChange={Title} placeholder="title" />
        <input type="checkbox" className="checkbox" disabled />
      </div>

      <input
        type="button"
        value="Submit"
        className="submiting"
        onClick={Submit}
      ></input>
    </>
  );
};

export default InputTodo;
