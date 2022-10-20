import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../store/features/user/userSlice'

const Customers = () => {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  return (
    <div className="container d-flex flex-column justify-content-evenly align-items-center" style={{minHeight: '100vh'}} id="about-us">
        <h2 className='fw-bold mb-4'>Our Customers</h2>
        <div className='container d-flex justify-content-center flex-wrap gap-3'>
          {userList.map(user =>{
            return(
              <figure key={user.id} className='figure mt-3 mx-3 d-flex flex-column align-items-center'>
                  <img 
                      src={user.avatar} 
                      className="img-thumbnail rounded-circle float-start" 
                      style={{height: '200px', width: '200px', objectFit: 'cover'}} 
                      alt="customer"
                  >    
                  </img>
                  <figcaption className='figure-caption'>{user.name}</figcaption>
              </figure>
            )
            })
          }
        </div>
    </div>
  )
}

export default Customers;
