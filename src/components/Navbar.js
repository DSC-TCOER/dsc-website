import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">GDSC-TCOER</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/Team">Teams</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
              
            </div>
        </div>
    </nav>
    
    </>
        
    )
}

export default Navbar
