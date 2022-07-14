import React, { useEffect, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import $ from 'jquery';

const Navbar = () => {
  const ref = useRef();
  useEffect(() => {
    const tab = window.location.href.split("/").slice(-1)[0].toLowerCase();
    const currentTab = document.querySelector(`.nav-link[name = '${tab}']`);
    currentTab.classList.add("active");
    console.log(currentTab);
  }, []);

  const BackToTopHandler = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  function navItemsHandler(e) {
    const tab = e.target.href.split("/").slice(-1)[0].toLowerCase();

    setTimeout(() => BackToTopHandler(), 50);
    var elems = document.querySelector(".active");
    if (elems !== null) {
      elems.classList.remove("active");
    }
    if (e.target.classList.contains("nav-link")) {
      e.target.parentElement.className += " active";
    } else e.target.className += " active";
    ref.current.classList.remove("show");
  }
  // const toggleDarkMode = () => {
  //   let body = document.body;
  //   body.classList.toggle("dark-mode");
  //   console.log(body);
  // };
  return (
    <>
      <nav
        style={{
          boxShadow:
            "0 0.9px 2.2px rgba(0, 0, 0, 0.039), 0 2.2px 5.3px rgba(0, 0, 0, 0.048), 0 4.1px 10px rgba(0, 0, 0, 0.052), 0 7.4px 17.9px rgba(0, 0, 0, 0.057), 0 13.8px 33.4px rgba(0, 0, 0, 0.067),0 33px 80px rgba(0, 0, 0, 0.11)",
          padding: "0.4em 6px",
        }}
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light "
      >
        {/* <div className="container-fluid"> */}
        {/* Brand Component */}
        <Link style={{ padding: "0px 0px" }} className="navbar-brand" to="/">
          <div className="nav-brand">
            <img src="./images/college-logo.png" alt="DSC TCOER Logo"></img>
            <div className="text">
              <div className="club">Google Developer Student Club</div>
              <div className="college">
                Trinity College of Engineering and Research
              </div>
            </div>
          </div>
        </Link>
        {/* Responsive button Part start */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            boxShadow:
              "rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* responsive button part end */}
        <div
          ref={ref}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            justifyContent: "end",
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
          }}
        >
          {/* Menu Box */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul
              style={{
                justifyContent: "space-evenly",
                margin: "auto",
                fontSize: "1rem",
              }}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item" onClick={navItemsHandler}>
                <Link
                  // activeClassName="active"
                  className="nav-link"
                  aria-current="page"
                  name=""
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={navItemsHandler}>
                <Link className="nav-link" to="/Team" name="team">
                  Teams
                </Link>
              </li>
              <li className="nav-item" onClick={navItemsHandler}>
                <Link className="nav-link" to="/events" name="events">
                  Events
                </Link>
              </li>
              <li className="nav-item" onClick={navItemsHandler}>
                <Link className="nav-link" to="/contact" name="contact">
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <div className="nav-link" onClick={toggleDarkMode}>
                  Dark Mode
                </div>
              </li> */}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
