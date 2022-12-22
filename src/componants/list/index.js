import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListInput from "./inputList";
import ShowList from "./showList";
import { createTask } from "../../redux/pages/action";

const ToDo = (props) => {
  const [title, setTitle] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("All");

  const dispatch = useDispatch();
  const Submit = () => {
    dispatch(createTask(title, completed));
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
          setFilter={setFilter}
          completed={completed}
          setCompleted={setCompleted}
        />
      </div>
    </>
  );
};

export default ToDo;
