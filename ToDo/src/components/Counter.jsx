import { useState } from "react";



const Counter = () => {

  const [count,setCount] = useState(0);

  const increase = () => setCount(count +1);
  const decrease = () => setCount(count -1);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase} className="increase">+</button>
      <button onClick={decrease} className="decrease">-</button>
    </>
  );
};

export default Counter;
