import React , {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCount, decrease, reset } from "../../redux/pages/action";

export const InputTodo = () => {
const [value, setValue] = useState("");
const dispatch = useDispatch();
  return (
    <div id="list-inp">
         <input value={value} onChange={e => setValue(e.target.value)}  />;
      <button onClick={() => dispatch()}>Add</button>
    
     </div>
  );
};

export default InputTodo;
