import React from 'react'
import PersonImg from '../assets/img/person.jpg'


const Customers = () => {
  
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}} id="about-us">
        <h2 className='fw-bold mb-4'>Our Customers</h2>
        <figure className='figure mt-3 d-flex flex-column align-items-center'>
            <img 
                src={PersonImg} 
                className="img-thumbnail rounded-circle float-start" 
                style={{height: '200px', width: '200px', objectFit: 'cover'}} 
                alt="person-in-charge">    
            </img>
            <figcaption className='figure-caption'>Dane Kyle Watterson - CEO of Travel Star</figcaption>
        </figure>
    </div>
  )
}

export default Customers;
