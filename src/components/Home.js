import React from "react";
import Footer from "./Footer";
import SubHome2 from "./SubHome2";
import "@google/model-viewer";
import './Home.css'
import { useLinkClickHandler } from "react-router-dom";



const Home = () => {
  return (
    <>
      <header className="container col-xxl-8 px-4 py-5">
        <div style={{justifyContent: 'space-around', height: '75vh'}} className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className="col-10 col-sm-8 col-lg-6">
            <model-viewer
              alt="Google Developers logo"
              src='./images/DSC-3D-logo2.glb'
              poster = './images/dsc-logo.png'
              camera-controls
              environment-image="./images/white.png"
              exposure = '0.5'
              auto-rotate
              auto-rotate-delay = '1000'
              rotation-per-second = '15deg'
              shadow-intensity = '1'
              style={{ width: '30rem', height: '25rem', margin: 'auto'}}
            ></model-viewer>
          </div>
          <div className="col-lg-6">
            <div style={{textAlign: 'center'}} className="heading">
              <h3 className="presenting">Presenting,</h3>
              <h1><span className="dsc">GDSC</span> <span className="tcoer">TCOER</span> <span className="pune">PUNE</span></h1>
              <h5 style={{fontWeight: '400', marginBottom: '2.5rem', fontSize: '1.6rem'}}> We are a growing community loaded with creative developers and constantly learning members. Join us on a thrilling journey and capture remarkable memories!</h5>
              <a
                href="https://gdsc.community.dev/accounts/login/?next=/trinity-college-of-engineering-and-research-pune/"
                target="nt"
                className="btn-primary"
              >
                Become A Member
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container-xxl py-5" >
                <div className="container">
                    <div className='border-bottom border-5 border-primary px-1' >

                        <h3 className=" ff-secondary text-center text-primary fw-normal my-5" >Our Aim</h3>
                    </div>
                    <div style={{justifyContent: 'center'}} className="row g-4 my-3">

                        <div className="col-lg-3 col-sm-6 " >
                          <a style={{textDecoration: 'none', color: 'black'}} href="#Connect">
                            <div className="aim-item  pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                <div className="p-4">
                                    <i className="fas fa-users fa-2x"></i>
                                    <h5>Connect</h5>

                                </div>
                            </div>
                          </a>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6" >
                            <a style={{textDecoration: 'none', color: 'black'}} href="#Learn">
                                <div className="aim-item pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                    <div className="p-4">
                                        <i className="fas fa-lightbulb fa-2x"></i>
                                        <h5>Learn</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        

                        <div className="col-lg-3 col-sm-6  ">
                          <a style={{textDecoration: 'none', color: 'black'}} href="#Grow">
                            <div className="aim-item pt-3" style={{boxShadow: "0 0 47px rgb(0 0 0 / 43%)", borderRadius: "19px"}}>
                                <div className="p-4">
                                    <i className="fas fa-trophy fa-2x"></i>
                                    <h5>Grow</h5>
                                </div>
                            </div>
                          </a>
                        </div>


                        <div className='border-bottom border-5 border-primary px-1' >
                            <h3 className=" ff-secondary text-center text-primary fw-normal my-5" >Helping Students Bridge The Gap Between Theory and Practice</h3>
                        </div>

                    </div>
                </div>
            </div>

      <div className="">
        <SubHome2
          url="./images/connect.gif"
          para="Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors."
          head="Connect"
          addClass = "odd"
        />
        <div style={{ "background-color": "#d4d7da" }}>
          <SubHome2
            url="./images/Online-learning.gif"
            para="Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person."
            head="Learn"
            addClass = "even"
          />
        </div>
        <SubHome2
          url="./images/growth2.gif"
          para="Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too."
          head="Grow"
          addClass = "odd"
        />
      </div>

      
    </>
  );
};

export default Home;
