import React, { useState } from "react";
import Todo from "./componants/list/index";

const App = () => {
  const [darkMode, changeMode] = useState(true);

  function moodChange() {
    changeMode(!darkMode);
  }

  return (
    <span className={darkMode ?  "theme--dark" :"theme--default" }>
      <div className="App ">
        <Todo moodChange={moodChange} darkMode={darkMode} />
      </div>
    </span>
  );
};

export default App;
