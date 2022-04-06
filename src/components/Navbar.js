import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <nav style={{boxShadow: '0 0.9px 2.2px rgba(0, 0, 0, 0.039), 0 2.2px 5.3px rgba(0, 0, 0, 0.048), 0 4.1px 10px rgba(0, 0, 0, 0.052), 0 7.4px 17.9px rgba(0, 0, 0, 0.057), 0 13.8px 33.4px rgba(0, 0, 0, 0.067),0 33px 80px rgba(0, 0, 0, 0.11)'}} className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
            <Link style={{padding: '0px 0px'}} className="navbar-brand" to="/">
                <div className="nav-brand">
                    <img src="./images/dsc-logo.png" alt="DSC TCOER Logo"></img>
                    <div className="text">
                        <div className="club">Developer Students Club</div>
                        <div className="college">
                            Trinity College of Engineering and Research
                        </div>
                    </div>
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul style={{margin: 'auto', fontSize: '1.5rem'}} className="navbar-nav me-auto mb-2 mb-lg-0">
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
