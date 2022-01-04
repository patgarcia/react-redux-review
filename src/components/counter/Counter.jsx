import React from 'react';
import { useCounter } from '../../use-counter';

const Counter = () => {
  const { count, decrement, increment, setVal } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <div className="counter"></div>
      <div>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
        <button onClick={() => setVal(0)}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
