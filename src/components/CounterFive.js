import React, { useReducer } from "react";

let initialValue = {
  firstCounter: 0
};

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function CounterFive() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterFive;
