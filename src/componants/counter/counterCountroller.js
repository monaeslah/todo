import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decrease, reset } from "../../redux/pages/action";

export const CounterNav = () => {
  const dispatch = useDispatch();
  
  return (
    <div id="counter-nav">
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button
        onClick={() => dispatch(reset()) } >
        Reseteee
      </button>
      <button onClick={() =>  dispatch(addCount()) } >
        Increase
      </button>
     </div>
  );
};

export default CounterNav;
