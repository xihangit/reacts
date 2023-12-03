import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

function CounterView() {
  const count=useSelector((state)=> state.counter.count);
  console.log(count)

  const dispatch=useDispatch();
  return(
  <div>

 <h1> count:{count}</h1>
 
 <button onClick={()=> {dispatch(increment())}}>increment</button>
<button onClick={()=> {dispatch(decrement())}}>decrement</button>
 <button onClick={()=> {dispatch(reset())}}>reset</button>
 <button onClick={()=> {dispatch(increaseByAmount(2))}}>increaseByAmount</button>




  </div>
  )
}

export default CounterView;
