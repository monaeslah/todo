import React from "react";

import ListInput from "./inputList";
import ShowList from "./showList";

const ToDo = () => {
 
  return (
    <>

    <div className="app-bg">
        <img src={require("../../assets/img/bg-desktop-light.jpg")} alt="" />
      
    </div>
    <div className="app-body">
      <ListInput />
      <ShowList />
    </div>
    </>
  );
};

export default ToDo;
