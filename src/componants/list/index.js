import React, { useState } from "react";
import ListInput from "./inputList";
import ShowList from "./showList";

const ToDo = (props) => {
  {console.log("app",props)}
  return (
    <>
{ console.log(">>>",props.darkMode,props)}
      <div className={'app-bg theme ' }>
        {!props.darkMode ? (
          <img src={require("../../assets/img/bg-desktop-dark.jpg")} alt="" />
        ) : (
          <img src={require("../../assets/img/bg-desktop-light.jpg")} alt="" />
        )}
      </div>
      <div className="app-body">
        <ListInput  darkMode={props.darkMode}  onChange={props.onChange}   />
        {console.log("app",props)}
        <ShowList />
      </div>
    </>
  );
};

export default ToDo;
