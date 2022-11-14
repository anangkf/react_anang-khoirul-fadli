import React from 'react'
import PersonImg from '../assets/img/person.jpg'

const AboutUs = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}} id="about-us">
        <h2 className='fw-bold mb-4'>About us</h2>
        <figure className='figure mt-3 d-flex flex-column align-items-center'>
            <img 
                src={PersonImg} 
                className="img-thumbnail rounded-circle float-start" 
                style={{height: '200px', width: '200px', objectFit: 'cover'}} 
                alt="person-in-charge">    
            </img>
            <figcaption className='figure-caption'>Dane Kyle Watterson - CEO of Travel Star</figcaption>
        </figure>

        <p className='mt-4 fs-3 text-center'>
        Create positive change through the joy of travel.
 
        That's our mission. It’s been on a journey, while staying true to itself – just like us.
        Since the very beginning we’ve seen travel as a force for good.
 
        Over 30 years later, we’re super proud to call ourselves the world’s largest purpose-led adventure travel brand. We’re here to give back – and have a great time while doing it.
        We want to be the best travel company not just in the world, but for the world.

        We do this in lots of different ways (check out our United Nations Sustainable Development Goals if you love details). We even report on them all too.
        </p>
    </div>
  )
}

export default AboutUs;
