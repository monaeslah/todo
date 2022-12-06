import React , {useState} from "react";
import {  updateTodo, deletTodo } from "../../redux/pages/action";
import { useDispatch} from "react-redux";

export  const ItemList=(todo)=> {
  const [darkMode, setDarkMode] = useState(false);
  const [editable,setEditable]=useState(false)
  const  [name,setName] = useState('')
  let dispatch=useDispatch()
 

  const delet=(id)=>{
    dispatch(deletTodo(id))
   
 
    }



  return (
    <div className="flex todo-list m-t-2 ">
    
      <div>{editable?<input type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />:<span>{todo.todo.title }</span>}</div>
      <button className="edit_btn" 
      onClick={()=>{
        dispatch(updateTodo(
          {title:name }
        ))
        if(editable){
          setName();
        }
        setEditable(!editable);
      }}
      
      >
        {editable?"Update":"Edit"}</button>
      <button className="delt_btn" onClick={()=>delet(todo.todo.id)}>Delet</button>
    </div>
  );
}
export default ItemList




// import React , {useState} from "react";
// import {  updateTodo, deletTodo } from "../../redux/pages/action";
// import { useDispatch} from "react-redux";

// export  const ItemList=(todo)=> {
//   const [editable,setEditable]=useState(false)
//   const  [name,setName] = useState('')
//   let dispatch=useDispatch()
//   return (
//     <div className="items_row">
//      {console.log('todoha',todo)}
//       <div>id</div>
//       <div>{editable?<input type='text'  placeholder={todo.todo.title }
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       />:<h3>{todo.todo.title}</h3>}</div>
//       <button className="edit_btn" 
//       onClick={()=>{
//         dispatch(updateTodo(
//           {
//             ...todo,
//             title:name
//           }
//         ))
//         if(editable){
//           setName(todo.title);
//         }
//         setEditable(!editable);
//       }}
      
//       >
//         {editable?"Update":"Edit"}</button>
//       <button className="delt_btn" onClick={()=>dispatch(deletTodo(todo.todo.id))}>Delet</button>
//     </div>
//   );
// }
// export default ItemList
