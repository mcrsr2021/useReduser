import React, { useReducer } from "react";

let initialValue = {
  firstCounter: 0
};
const reducer = (state, action) => {
  switch (action) {
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
function CounterFour() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterFour;
