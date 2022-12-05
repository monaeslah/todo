import React , {useState} from "react";
import {  updateTodo, deletTodo } from "../../redux/pages/action";
import { useDispatch} from "react-redux";

export  const ItemList=(todo)=> {
  const [editable,setEditable]=useState(false)
  const  [name,setName] = useState('')
  let dispatch=useDispatch()
  return (
    <div className="items_row">
     {console.log('todoha',todo)}
      <div>id</div>
      <div>{editable?<input type='text'  placeholder={todo.todo.title }
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />:<h3>{todo.todo.title}</h3>}</div>
      <button className="edit_btn" 
      onClick={()=>{
        dispatch(updateTodo(
          {
            ...todo,
            title:name
          }
        ))
        if(editable){
          setName(todo.title);
        }
        setEditable(!editable);
      }}
      
      >
        {editable?"Update":"Edit"}</button>
      <button className="delt_btn" onClick={()=>dispatch(deletTodo(todo.todo.id))}>Delet</button>
    </div>
  );
}
export default ItemList