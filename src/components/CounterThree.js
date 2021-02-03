import React, { useReducer } from "react";

let initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function CounterThree() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </React.Fragment>
  );
}

export default CounterThree;
