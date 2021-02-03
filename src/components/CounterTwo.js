import React, { useState } from "react";

function CounterTwo() {
  let [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </React.Fragment>
  );
}

export default CounterTwo;
