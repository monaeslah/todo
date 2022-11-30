import React from "react";

import CounterNav from "./counterCountroller";
import CounterVal from "./counterVal"

const Counter = () => {
  // console.log("Counter...", props);
  return (
    <section className="counter">
      <h1>Counter</h1>
     <CounterNav />
     <CounterVal/>
    </section>
  );
};

export default Counter;
