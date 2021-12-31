import React from 'react'
import HomeCSS from './Home.module.css'

const Home = () => {

    let myStyle = {
        height: "388px",

    }

    let cStyle = {
        display: "flex",
        // flexDirection:"row",
        width: "18rem",
        border: "2px solid red"
    }


    return (

        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/iot.png" className="d-block w-100" style={myStyle} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to GDSC TCOER</h2>
                            <p><strong>LEARN, </strong> <strong>CONNECT, </strong> <strong>GROW</strong> </p>
                            <button className="btn btn-danger mx-2">Technology</button>
                            <button className="btn btn-primary mx-2">Web Development</button>
                            <button className="btn btn-success mx-2">Tech Fun</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/home-slider4.jpg" className="d-block w-100" style={myStyle} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>The Best Coding Blog</h2>
                            <p>Technology News, Development and Trends</p>
                            <button className="btn btn-danger mx-2">Technology</button>
                            <button className="btn btn-primary mx-2">Web Development</button>
                            <button className="btn btn-success mx-2">Tech Fun</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/aws-iot-defender.jpg" className="d-block w-100" style={myStyle} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Award winning Blog</h2>
                            <p>Technology News, Development and Trends</p>
                            <button className="btn btn-danger mx-2">Technology</button>
                            <button className="btn btn-primary mx-2">Web Development</button>
                            <button className="btn btn-success mx-2">Tech Fun</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">Global Conferences</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="./images/City.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Learn Designing</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?tech,code,laptop" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-danger">FrontEnd</strong>
                                <h3 className="mb-0">Bootstrap Templates</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="./images/City.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-warning">Python</strong>
                                <h3 className="mb-0">Learn Python</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="250" src="./images/City.png" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="container">
                <p className="float-left"><a href="#">Back to top</a></p>
                <p>© 2021-2022 GDSC TCOER</p>
            </footer>



        </>


    )
}

export default Home
