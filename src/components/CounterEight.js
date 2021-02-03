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

function CounterEight() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  let [count2, dispatch2] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
      <div>
        <h1>{count2}</h1>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>reset</button>
      </div>
    </div>
  );
}

export default CounterEight;
