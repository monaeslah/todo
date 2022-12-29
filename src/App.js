import React, { useState } from "react";
import Count from "./componants/counter/index";
import Todo from "./componants/list/index";


const App = () => { 
  const [darkMode, changeMode] = useState(true);
  



  function moodChange() {
    changeMode(!darkMode);
  }


   return (
    <span className={darkMode ? "theme--default" : "theme--dark"}>
      <div className="App ">
        <Todo
        moodChange={moodChange}
         darkMode={darkMode} 
      />
      
      </div>
    </span>
  );
};

export default App;
