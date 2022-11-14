import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-light py-3">
            <div className="container-fluid px-4">
                <a className="navbar-brand fw-bold fs-3" href="/">Travel Star</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about-us">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact-us">Contact us</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/customers'}>Our Customers</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
