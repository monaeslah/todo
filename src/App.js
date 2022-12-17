import React, { useState } from "react";
import Count from './componants/counter/index'
import Todo from './componants/list/index'


const  App=()=> {
  const [darkMode, changeMode] = useState(true);
 
  function handleChange() {
    changeMode(!darkMode);
   
  }
  return (
    <div className={'App ' + (darkMode ?  'theme--default':'theme--dark' )} >

   <Todo darkMode={darkMode}  onChange={handleChange} />
   
    </div>
  );
}

export default App;
