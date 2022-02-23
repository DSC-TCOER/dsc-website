import React from 'react'
import Footer from './Footer'
import SubHome2 from './SubHome2'


const Home = () => {
    return (

        <>

            <div className="container">
                <img src="./images/imagebg.jpg" class="img-fluid" alt="..." />
            </div>


            <div class="container-xxl py-5">
                <div class="container">
                    <div className='border-bottom border-5 border-primary px-1' >

                        <h5 class=" ff-secondary text-center text-primary fw-normal my-5" >Our Aim</h5>
                    </div>
                    <div class="row g-4 my-3">
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
                            <h5 class=" ff-secondary text-center text-primary fw-normal my-5" >Helping Students Bridge The Gap Between Theory and Practice</h5>
                        </div>

                    </div>
                </div>
            </div>



            <div className="" >

                <SubHome2 url="./images/connect.gif" para="Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.
" head = "Connect" />
                <div style={{"background-color": "#d4d7da"}} >
                <SubHome2 url="./images/Online-learning.gif" para="Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person." head = "Learn" />
                </div>
                <SubHome2 url="./images/growth2.gif" para="Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too."  head = "Grow"/>

            </div>


            <Footer />



        </>


    )
}

export default Home
