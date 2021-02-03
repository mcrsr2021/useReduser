import React, { useReducer } from "react";

let initialValue = {
  firstCounter: 0,
  secondCounter: 10
};

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function CounterSeven() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>firstCounter - {count.firstCounter}</h1>
      <h1>secondCounter - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement By 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement2
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterSeven;
