import React, { useState } from "react";

function CounterFC() {
  const [count, setCount] = useState(0);

  const incremnt = () => {
    setCount(count + 1);
  };

  const decremnt = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>The Count is: {count}</h1>
      <h2>--------------------------</h2>
      <button onClick={incremnt}> + </button>
      <button onClick={decremnt}> - </button>
    </div>
  );
}

export default CounterFC;
