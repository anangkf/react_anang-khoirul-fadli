import React from 'react'
import '../App.css'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const count = useSelector(state => state.counter.value)
  
  return (
    <div className='navbar'>
      <h1>Navbar</h1>
      <div className="count" data-count={count}>Count</div>
    </div>
  )
}

export default Navbar
