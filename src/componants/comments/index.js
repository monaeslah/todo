import React, { useHook , useState, Fragment}   from 'react';


export default function Counting (){
const [count ,setCount]=useState(0)
return(
    <Fragment>
        <div>
            Counting by useHook{count}
            <button onClick={()=>setCount(count+1)}> Click  </button>
        </div>
    </Fragment>
)

}