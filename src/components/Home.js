import React from "react";
import Footer from "./Footer";
import SubHome2 from "./SubHome2";
import "@google/model-viewer";
//import "./home.css";
//import Model from "../../public/images/DSC-3D-logo2.glb";

const Home = () => {
  return (
    <>
      <header className="container col-xxl-8 px-4 py-5">
        {/* <div className='hero'>
          <div className="hero-text">
            <h3>Presenting,</h3>
            <h2>Google Developer Student Club</h2>
            <h3>TCOER Pune</h3>
          </div>
          <div className="hero-image">
            <model-viewer
              alt="Google Developers logo"
              src='./images/DSC-3D-logo2.glb'
              camera-controls
              exposure = '0.4'
              auto-rotate
            ></model-viewer>
          </div>
        </div> */}
        <div style={{justifyContent: 'space-around'}} className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className="col-10 col-sm-8 col-lg-6">
            <model-viewer
              alt="Google Developers logo"
              src='./images/DSC-3D-logo2.glb'
              camera-controls
              exposure = '0.4'
              auto-rotate
              auto-rotate-delay = '1000'
              rotation-per-second = '15deg'
              style={{ width: '30rem', height: '25rem', margin: 'auto'}}
            ></model-viewer>
          </div>
          <div className="col-lg-6">
            <h3>Presenting,</h3>
            <h2>Google Developer Student Club</h2>
            <h3>TCOER Pune</h3>
          </div>
        </div>
      </header>
      
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="border-bottom border-5 border-primary px-1">
            <h5 className=" ff-secondary text-center text-primary fw-normal my-5">
              Our Aim
            </h5>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <div
                className={classes.badge}
                style={{
                  boxShadow: "0 0 47px rgb(0 0 0 / 43%)",
                  borderRadius: "19px",
                }}
              >
                <div className="p-4">
                  <i className="fas fa-users fa-2x"></i>
                  <h5>Connect</h5>
                </div>
              </div>
            </div>
            <div className="mh-25 mw-25">
              <div
                className={classes.badge}
                style={{
                  boxShadow: "0 0 47px rgb(0 0 0 / 43%)",
                  borderRadius: "19px",
                }}
              >
                <div className="p-4">
                  <i className="fas fa-lightbulb fa-2x"></i>
                  <h5>Learn</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div
                class=""
                style={{
                  boxShadow: "0 0 47px rgb(0 0 0 / 43%)",
                  borderRadius: "19px",
                }}
              >
                <div class={classes.badge}>
                  <i class="fas fa-trophy fa-2x"></i>
                  <h5>Grow</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom border-5 border-primary px-1">
            <h5 class=" ff-secondary text-center text-primary fw-normal my-5">
              Helping Students Bridge The Gap Between Theory and Practice
            </h5>
          </div>
        </div>
      </div> */}

      <div class="container-xxl py-5" >
                <div class="container">
                    <div className='border-bottom border-5 border-primary px-1' >

                        <h5 class=" ff-secondary text-center text-primary fw-normal my-5" >Our Aim</h5>
                    </div>
                    <div style={{justifyContent: 'center'}} class="row g-4 my-3">
                        <div class="col-lg-3 col-sm-6 " >

                            <div class="aim-item  pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                <div class="p-4">
                                    <i class="fas fa-users fa-2x"></i>
                                    <h5>Connect</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6" >
                            <div class="aim-item pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                <div class="p-4">
                                    <i class="fas fa-lightbulb fa-2x"></i>
                                    <h5>Learn</h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6  ">
                            <div class="aim-item pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                <div class="p-4">
                                    <i class="fas fa-trophy fa-2x"></i>
                                    <h5>Grow</h5>
                                </div>
                            </div>
                        </div>


                        <div className='border-bottom border-5 border-primary px-1' >
                            <h4 class=" ff-secondary text-center text-primary fw-normal my-5" >Helping Students Bridge The Gap Between Theory and Practice</h4>
                        </div>

                    </div>
                </div>
            </div>

      <div className="">
        <SubHome2
          url="./images/connect.gif"
          para="Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.
"
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
      </div>

      <Footer />
    </>
  );
};

export default Home;
