import React from "react";

const About = () => {
  return (
    <>
      <div className="">
        <div className="container-xxl">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 ">
                <div className="row g-3">
                  <div className="col-md">
                    <img
                      src="./images/homeIntro.gif"
                      className="img-fluid"
                      alt=""
                      style={{ borderRadius: "3rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h1 className="mb-4 my-4">
                  Welcome to{" "}
                  <img
                    className="img-fluid rounded "
                    src="./images/dsc-logo.png"
                    style={{ width: "45px" }}
                  />{" "}
                  DSC TCOER
                </h1>
                <hr></hr>
                <h2>What is GDSC?</h2>
                <br></br>
                <h4>
                  Google Developer Student Clubs are community groups for
                  college and university students interested in Google developer
                  technologies.
                </h4>
                <br></br>
                <p>
                  Students from all undergraduate or graduate programs with an
                  interest in growing as a developer are welcome. By joining a
                  GDSC, students grow their knowledge in a peer-to-peer learning
                  environment and build solutions for local businesses and their
                  community. Google Developer Student Clubs is a program
                  supported by Google Developers.
                </p>
                <br></br>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-2">
                      <div className="ps-2">
                        <p className="mb-0">Number of</p>
                        <h6 className="text-uppercase mb-0">Events</h6>
                      </div>
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0 mx-3"
                        data-toggle="counter-up"
                      >
                        20
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-2">
                      <div className="ps-2">
                        <p className="mb-0">No of</p>
                        <h6 className="text-uppercase mb-0">Members</h6>
                      </div>
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0 mx-3"
                        data-toggle="counter-up"
                      >
                        540+
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
