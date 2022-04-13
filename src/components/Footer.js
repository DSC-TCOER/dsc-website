import React from "react";

function Footer() {
  return (
    <div className="">
      <div
        className="container-fluid bg-dark text-light footer "
        style={{ borderTopRightRadius: "2rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="container col-lg- col-md-5">
              <h4 className="ff-secondary text-center text-primary fw-normal mb-4">
                Contact Us
              </h4>
              <p className="mb-2 text-center ">
                Trinity College of Engineering And Research, Saswad - Bopdev -
                Pune Rd, Yewalewadi, Pune - 411048
              </p>
              <p className="mb-2 text-center">
                <a href = "mailto: dsctcoer2021@gmail.com">
                  <i className="fa fa-envelope me-3"></i>dsctcoer2021@gmail.com
                </a>
              </p>
              <div
                className="d-flex pt-2"
                style={{
                  justifyContent: "center",
                }}
              >
                <a
                  className="btn btn-outline-light btn-social text-center"
                  href="https://in.linkedin.com/company/google-developer-student-club-tcoer"
                  target="nt"
                  style={{fontSize: '1.5rem'}}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social text-center mx-2"
                  href="https://www.instagram.com/dsc_tcoer/"
                  target="nt"
                  style={{fontSize: '1.5rem'}}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social text-center mx"
                  href="https://discord.com/invite/X7JXPG8Tmt"
                  target="nt"
                  style={{fontSize: '1.5rem'}}
                >
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="container col-md-6 text-center mb-3 mb-md-0">
                <a
                  className="text-center"
                  href="#"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  &copy; www.dsctcoer.com
                </a>{" "}
                All Right Reserved.
              </div>
              <p className="text-center">
                <a href="#">Back to top</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
}

export default Footer;
