import React from 'react'
import Footer from './Footer'

const About = () => {
    return (
        <>
            <div className="">
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 ">
                                <div className="row g-3">
                                    <div class="col-md">
                                        <img src="./images/homeIntro.gif" class="img-fluid" alt="" style={{ borderRadius: "140px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className=" ff-secondary text-start text-primary fw-normal border-start  border-5 border-primary px-1">About Us</h5>
                                <h1 className="mb-4 my-4">Welcome to <img className='img-fluid rounded ' src='./images/dsc-logo.png' style={{ width: "45px" }} /> DSC TCOER</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-2">
                                            <div className="ps-2">
                                                <p className="mb-0">Number of</p>
                                                <h6 className="text-uppercase mb-0">Events</h6>
                                            </div>
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0 mx-3" data-toggle="counter-up">9</h1>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-2">
                                            <div className="ps-2">
                                                <p className="mb-0">No of</p>
                                                <h6 className="text-uppercase mb-0">Members</h6>
                                            </div>
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0 mx-3" data-toggle="counter-up">300+</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
