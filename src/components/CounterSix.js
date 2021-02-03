import React, { useReducer } from "react";

let initialValue = {
  firstCounter: 0
};

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function CounterSix() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement By 5
      </button>
    </div>
  );
}

export default CounterSix;
