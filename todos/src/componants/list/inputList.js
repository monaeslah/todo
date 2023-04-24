import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import moon from "../../assets/img/icon-moon.svg";
import sun from "../../assets/img/icon-sun.svg";

export const InputTodo = (props) => {
  const mod = props.darkMode;
const addTasks=(e)=>{
  e.preventDefault();
  if (!props.title.trim()) {
    return;
  }
  props.submit(props.title);
 
 
}
  return (
    <>
      <div className="flex align-center space-between">
        <h1>TODO</h1>
        {!mod ? (
          <img src={moon} alt="" onClick={() => props.moodChange(!mod)} />
        ) : (
          <img src={sun} alt="" onClick={() => props.moodChange(!mod)} />
        )}
      </div>
      <form className="todo-input " onSubmit={addTasks}>
        <input
          value={props.title}
          onChange={(event) => {
            props.setTitle(event.target.value);
          }}
          placeholder="Create a new Todo..."
        />
        <input type="checkbox" className="checkbox" disabled />
      </form>

      {/* <input
        type="button"
        value="Submit"
        className="submiting"
        onClick={}
      ></input> */}
    </>
  );
};

export default InputTodo;
