import React, { useState } from 'react';
import './Counter.css';

function Counter() {
 const[ counter, setCounter]= useState(0)

 function Increment(){
  setCounter(counter+1)
 }
  function Decrement(){
    if (counter>0) 
      setCounter(counter-1)
  }


return (
  <>
  <h1>Counter</h1>
    <div className='container'>
      <button onClick={Increment}>+</button>
      <p>{counter}</p>
      <button onClick={Decrement}>-</button>
</div>
</>
  )
}

export default Counter