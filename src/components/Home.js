import React from "react";
import SubHome2 from "./SubHome2";
import "@google/model-viewer";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import HallOfFame from "./HallOfFame";

const Home = () => {
  const onClick = (e) => {
    console.log(e.currentTarget.className);
    // let targetElem = e.currentTarget.name;
    // document.getElementById("Connect").parentElement.classList.remove("active");
    // document.getElementById("Learn").parentElement.classList.remove("active");
    // document.getElementById("Grow").parentElement.classList.remove("active");
    // var targetElemClass =
    //   document.getElementById(targetElem).parentElement.className;
    // document.getElementById(targetElem).parentElement.className =
    //   "active " + targetElemClass;
    let targetElem = e.currentTarget.name;
    var slideButton = document.querySelector(
      `button[aria-label="${targetElem}"]`
    );
    slideButton.click();
    console.log(slideButton);
  };
  return (
    <>
      <header style={{ margin: "auto" }} className="col-xxl-8 py-5">
        <div
          style={{ justifyContent: "space-around", minHeight: "80vh" }}
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
        >
          <div className="col-10 col-sm-8 col-lg-6">
            <model-viewer
              alt="Google Developers logo"
              src="./images/DSC-3D-logo2.glb"
              poster="./images/dsc-logo.png"
              camera-controls
              disable-zoom
              environment-image="./images/white.png"
              exposure="0.5"
              auto-rotate
              auto-rotate-delay="1000"
              rotation-per-second="15deg"
              shadow-intensity="1"
              style={{ height: "400px", margin: "auto" }}
              className="model-3d"
            ></model-viewer>
          </div>
          <div className="col-lg-6">
            <div style={{ textAlign: "center" }} className="heading">
              <h3>Presenting,</h3>
              <h1>
                GDSC TCOER
                {/* <span className="gdsc">GDSC</span>{" "}
                <span className="tcoer">TCOER</span> */}
              </h1>
              <p className="mt-3">
                We are a growing community loaded with creative developers and
                constantly learning members. Join us on a thrilling journey and
                capture remarkable memories!
              </p>
              <a
                href="https://gdsc.community.dev/accounts/login/?next=/trinity-college-of-engineering-and-research-pune/"
                target="nt"
                style={{ textDecoration: "none" }}
              >
                <button className="my-btn-primary" role="button">
                  Become A Member
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container-xxl">
        <div className="container">
          <h1 className=" ff-secondary text-center text-primary fw-normal my-5">
            Our Aim
          </h1>
          <div style={{ justifyContent: "center" }} className="row g-4 my-3">
            <div className="col-lg-3 col-sm-6" style={{ textAlign: "center" }}>
              <a style={{ textDecoration: "none" }} href="#Connect">
                <button
                  style={{
                    height: "11rem",
                    width: "11rem",
                    borderRadius: "50%",
                  }}
                  className="my-btn-primary aim-item-btn"
                  role="button"
                  name="Slide 1"
                  onClick={onClick}
                >
                  <div className="aim-item-text">
                    <i className="fas fa-users fa-2x"></i>
                    <h4>Connect</h4>
                  </div>
                </button>
              </a>
            </div>

            <div className="col-lg-3 col-sm-6" style={{ textAlign: "center" }}>
              <a style={{ textDecoration: "none" }} href="#Learn">
                <button
                  style={{
                    height: "11rem",
                    width: "11rem",
                    borderRadius: "50%",
                  }}
                  className="my-btn-primary aim-item-btn"
                  role="button"
                  name="Slide 2"
                  onClick={onClick}
                >
                  <div className="aim-item-text">
                    <i className="fas fa-lightbulb fa-2x"></i>
                    <h4>Learn</h4>
                  </div>
                </button>
              </a>
            </div>

            <div className="col-lg-3 col-sm-6" style={{ textAlign: "center" }}>
              <a style={{ textDecoration: "none" }} href="#Grow">
                <button
                  style={{
                    height: "11rem",
                    width: "11rem",
                    borderRadius: "50%",
                  }}
                  className="my-btn-primary aim-item-btn"
                  role="button"
                  name="Slide 3"
                  onClick={onClick}
                >
                  <div className="aim-item-text">
                    <i className="fas fa-trophy fa-2x"></i>
                    <h4>Grow</h4>
                  </div>
                </button>
              </a>
            </div>

            <h3 className=" ff-secondary text-center text-primary fw-normal my-5">
              Helping Students Bridge The Gap Between Theory and Practice
            </h3>
          </div>
        </div>
      </div>

      <Carousel variant="dark">
        <Carousel.Item interval={2500}>
          <SubHome2
            url="./images/connect.gif"
            para="Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors."
            head="Connect"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <SubHome2
            url="./images/Online-learning.gif"
            para="Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person."
            head="Learn"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <SubHome2
            url="./images/growth2.gif"
            para="Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too."
            head="Grow"
          />
        </Carousel.Item>
      </Carousel>

      <div
        style={{
          margin: "10rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className=" ff-secondary text-primary fw-normal border-start  border-4 border-primary px-1">
          About Us
        </h2>
        <About />
      </div>

      {/* <div className="">
        <SubHome2
          url="./images/connect.gif"
          para="Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors."
          head="Connect"
        />
        <div style={{ "background-color": "#d4d7da" }}>
          <SubHome2
            url="./images/Online-learning.gif"
            para="Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person."
            head="Learn"
          />
        </div>
        <SubHome2
          url="./images/growth2.gif"
          para="Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too."
          head="Grow"
        />
      </div> */}

      <div
        style={{
          margin: "10rem 0 2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className=" ff-secondary text-primary fw-normal border-start  border-4 border-primary px-1">
          Hall Of Fame
        </h2>
      </div>

      <HallOfFame />
    </>
  );
};

export default Home;
