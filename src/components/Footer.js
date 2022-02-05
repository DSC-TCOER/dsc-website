import React from 'react'

function Footer() {
    return (
        <div className=''>
            <div className="container-fluid bg-dark text-light footer " >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="container col-lg- col-md-5">
                            <h4 className="ff-secondary text-center text-primary fw-normal mb-4">Contact Us</h4>
                            <p className="mb-2 text-center ">Trinity College Of Engineering And Research, Yevlewadi, near bopdev ghat,kondhwa (b.k) pune -pincode</p>
                            <p className="mb-2 text-center"><i className="fa fa-phone-alt me-3"></i>+91 1234567891</p>
                            <p className="mb-2 text-center"><i className="fa fa-envelope me-3"></i>abc@gmail.com</p>
                            <div className="d-flex pt-2" style={{width: "127px",margin:" auto"}}>
                                <a className="btn btn-outline-light btn-social text-center" href=""><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social text-center mx-2" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social text-center mx" href=""><i className="fab fa-discord"></i></a>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="container col-md-6 text-center mb-3 mb-md-0" >
                                 <a className='text-center' href="#" style={{textDecoration : "none", color : "white" }}> &copy; www.dsctcoer.com</a> All Right Reserved.
                            </div>
                            <p className="text-center"><a href="#">Back to top</a></p>  
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </div>
        
    )
}

export default Footer
