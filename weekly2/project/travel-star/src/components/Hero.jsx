import React from 'react'

const Hero = () => {
  return (
    <div className="position-relative overflow-hidden hero p-3 p-md-5 text-center" style={{height: '89vh'}}>
        <div className="col-md-7 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal text-dark">Holidays without limits!</h1>
            <p className="lead fw-normal text-light">It's August again and it's time for you to plan your next vacation! This year we will provide an overview of the cheapest holiday destinations in Europe - both in terms of flights and accommodation!</p>
            <a className="btn btn-outline-light" href="#">Travel now!</a>    
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  )
}

export default Hero;
