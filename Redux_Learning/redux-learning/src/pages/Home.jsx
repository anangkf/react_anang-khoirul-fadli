import React from 'react'
import '../App.css'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset } from '../store/counter/counterSlice'

const Home = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='content'>
      <h1>Count: {count}</h1>
      <div className='action-btn'>
        <button
          onClick={() => dispatch(increment())} 
          className='btn'
        >
            Plus
        </button>
        <button 
          onClick={() => dispatch(decrement())} 
          className='btn'
        >
            Minus
        </button>
        <button 
          onClick={() => dispatch(reset())} 
          className='btn reset'
        >
            Reset
        </button>
      </div>
    </div>
  )
}

export default Home
