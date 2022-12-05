import React from "react";
import {useSelector } from "react-redux";


export const CounterVal = () => {
    const count = useSelector((store) => store.counter);
    return (
    <div className="counter-value">Count: {count}</div>
    )
}
export default CounterVal;