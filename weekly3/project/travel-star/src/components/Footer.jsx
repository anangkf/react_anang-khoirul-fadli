import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-5 px-5 bg-dark text-light text-small">
        <div className="row d-flex align-items-baseline justify-content-between">
            <div className="col-5">
                <h3>Travel Star</h3>
                <p>
                    We are bringing joy to business travelers everywhere by finding the best flights for busy schedules and perfect hotels that suit personal preferences.
                </p>
                Get in touch with us!
                <div className="col-3 d-flex justify-content-between">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </div>
            
            <div className="col-3">
               <h5>Purwokerto, Indonesia</h5> 
               <p>53144</p> 
               <p>Perumahan Puri Indah, Blk. K - L No.36, Windusara, Karangklesem, Purwokerto Selatan</p> 
               <p>0813-5557-7776</p> 
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
            <p className="mb-1 me-3">&copy; 2017–2022 Travel Star</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Support</a></li>
            </ul>
        </div>
      </footer>
  )
}

export default Footer;
