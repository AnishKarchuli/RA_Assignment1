import React from "react";
import { useCounter } from "./customHooks/useCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;