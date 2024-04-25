import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const [range,setRange]=useState("")
    //call useDispatch() hook = inorder to access the fn/action
    const dispatch = useDispatch()
    //useSelector() = inorder to access the state
    const count = useSelector((state)=>state.counterReducer.value)
    console.log(typeof(range));
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center w-100 flex-column'>
        <h1 style={{fontSize:'70px'}}>{count}</h1>

        <div className='mt-5 d-flex justify-content-evenly w-75'>
            <button className='btn btn-warning p-3' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-danger p-3' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-success p-3' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
        </div>

        <div className='w-100 mt-5'>
            <input type="text" name="" id="" placeholder='Enter The Range' className='form-control' onChange={(e)=>setRange(e.target.value)}/>
        </div>
    </div>
  )
}

export default Counter