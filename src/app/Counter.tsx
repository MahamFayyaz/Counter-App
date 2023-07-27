"use client"
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/slice/CounterSlice';
import { RootState } from './store/store';
export default function CounterView() {
  const dispatch=useDispatch()
  const counterValue=useSelector((state:RootState)=>state.CounterSlice.value);
  const increment=()=>{
    dispatch(counterActions.increment())
  }
  const decrement=()=>{
    dispatch(counterActions.decrement())
  }
  return (   
    <div className='py-6 flex justify-center gap-6'>
  <button className='py-4 px-3 rounded-md bg-green-500' onClick={increment}>Increment</button>
<div>Countervalue{counterValue}</div>
<button className='py-4 px-3 rounded-md bg-red-500' onClick={decrement}>Decrement</button>
</div>
    
   
    
  )
}
