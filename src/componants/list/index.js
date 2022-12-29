import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListInput from "./inputList";
import ShowList from "./showList";
import {
  createTask,
  deletTodo,
  filterByActive,
  filterByAll,
  filterByComplete,
  clearAllcompleted
} from "../../redux/pages/action";

const ToDo = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.addTodos);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("All");

  const Submit = () => {
    dispatch(createTask(title, completed));
  };
  const delet = (id) => {
    dispatch(deletTodo(id));
  };
  const setF = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value === "Complete") {
      dispatch(filterByComplete());
    } else if (value === "Active") {
      dispatch(filterByActive());
    } else {
      dispatch(filterByAll());
    }
  };

  const clearAll = () => {
    dispatch(clearAllcompleted());
  };

  return (
    <>
      <div className={"app-bg theme "}>
        {!props.darkMode ? (
          <img src={require("../../assets/img/bg-desktop-dark.jpg")} alt="" />
        ) : (
          <img src={require("../../assets/img/bg-desktop-light.jpg")} alt="" />
        )}
      </div>
      <div className="app-body">
        <ListInput
          title={title}
          setTitle={setTitle}
          darkMode={props.darkMode}
          moodChange={props.moodChange}
          submit={Submit}
        />

        <ShowList
          todos={todos}
          filter={filter}
          delet={delet}
          setFilter={setFilter}
          completed={completed}
          setCompleted={setCompleted}
          setF={setF}
          clearAll={clearAll}
        />
      </div>
     
    </>
  );
};

export default ToDo;
