import React, { useState } from "react";
import { updateTodo, deletTodo } from "../../redux/pages/action";
import { useDispatch } from "react-redux";
import iconCross from "../../assets/img/icon-cross.svg";

export const ItemList = (todo) => {
  let dispatch = useDispatch();

  const delet = (id) => {
    dispatch(deletTodo(id));
  };

  return (
    <>
      	<input
                className="checkbox"
								type="checkbox"
								onChange={delet}
								checked={todo.completed}
							/>
      <p>{todo.todo.title}</p>

      <img src={iconCross} alt="" onClick={() => delet(todo.todo.id)} />
    </>
  );
};
export default ItemList;

// import React, { useState } from "react";
// import { updateTodo, deletTodo } from "../../redux/pages/action";
// import { useDispatch } from "react-redux";
// import clsIcon from "../../assets/img/icon-cross.svg";
// export const ItemList = (todo) => {
//   let dispatch = useDispatch();
//   console.log("todo",todo)
//   const [darkMode, setDarkMode] = useState(false);
//   const [editable,setEditable]=useState(false)
//   const  [name,setName] = useState('')
//   const delet = (id) => {
//     dispatch(deletTodo(id));
//     console.log("id", id);
//   };

//   return (
//     <div className="flex todo-list m-t-2 ">
//       <ul>
//         <li>
//           <span>{todo.todo.title}</span>

//           <img src={clsIcon} alt="" onClick={delet(todo.todo.id)} />
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default ItemList;
