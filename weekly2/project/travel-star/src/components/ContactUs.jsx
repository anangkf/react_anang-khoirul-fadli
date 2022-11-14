import React, { useState } from 'react'

const DATA = {
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
}

const ContactUs = () => {
    const [data, setData] = useState(DATA);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        setData({
            ...data,
            [name]: value
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`
            Data Terkirim!
            
            First Name: ${data.firstName}
            Last Name: ${data.lastName}
            Email: ${data.email}
            Comment: ${data.comment}
            `)
        setData(DATA)
    }
  return (
    <div className="container d-flex align-items-center" style={{height: '100vh'}} id="contact-us">
            <div className="row g-5">
              <div className="col-md-5 col-lg-4">
                <h2>Contact Us</h2>
                <p className="lead my-3">Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
              </div>
            <div className="col-md-7 col-lg-8">
              
            <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="" 
                        value={data.firstName} 
                        onChange={handleChange} 
                        required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="" 
                        value={data.lastName} 
                        onChange={handleChange} 
                        required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
      
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={data.email}  
                        onChange={handleChange} 
                        placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
      
                  <div className="col-12">
                      <label className="form-label">What can we help you with?</label>
                      <textarea 
                        className="form-control" 
                        placeholder="Leave a comment here" 
                        value={data.comment}
                        name={'comment'}
                        onChange={handleChange}
                        style={{height: '100px'}}>
                      </textarea>
                  </div>
      
                <button className="w-100 btn btn-primary btn-lg my-3" type="submit">Send</button>
            </form>
            </div>
          </div>
        </div>
  )
}

export default ContactUs;
