import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListInput from "./inputList";
import ShowList from "./showList";
import { createTask, filterByActive, filterByAll, filterByComplete } from "../../redux/pages/action";

const ToDo = (props) => {
  
  const todos = useSelector((store) => store.addTodos);
  const [title, setTitle] = useState("");

  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("All");
  
  const dispatch = useDispatch();
  const Submit = () => {
 
    dispatch(createTask(title, completed));
  };




  
const setF =(e)=>{
  const value=e.target.value
  setFilter(value);
if (value==="Complete" ){
  dispatch(filterByComplete());
  
}else if(value==="Active"){
  dispatch(filterByActive())
}
else{
  dispatch(filterByAll())
}

 
}


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
          setFilter={setFilter}
          completed={completed}
          setCompleted={setCompleted}
          setF={setF}
      
        />
      </div>
    </>
  );
};

export default ToDo;
