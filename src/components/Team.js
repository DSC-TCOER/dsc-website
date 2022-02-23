import React from "react";
import Mystyle from "./Team.module.css";
import "./style.css";
import Footer from "./Footer";
import Cards from "./Cards";
import SubHome from "./SubHome";

export const Team = () => {
  return (
    <>
      <div className="my-3 ">
        <div className="text-center  ">
          <h1 className="text-cente text-primary  my-5">Our Teams</h1>
        </div>

        <SubHome
          social2=""
          url="./images/team.gif"
          head="heading"
          para="Our team description"
        />
      </div>

      <div className="">
        <div className="container-xxl py-5 ">
          <div className="container">
            {/* Community lead card */}

            <div className="text-center border-bottom border-5 border-primary px-1">
              <h1 className=" text-primary">Community Lead</h1>
            </div>
            <div class="d-flex justify-content-center">
              <Cards
                name="Zahra Dehghan"
                designation="Community Lead"
                social="https://www.linkedin.com/in/zahra-dehghan-8ab05b193
"
                url="./images/DSC Team/Zahra.jpg"
              />
            </div>

            <div className="tab-class text-center my-5">
              <div className={Mystyle.container}>
                <ul
                  className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5"
                  style={{
                    boxShadow: "rgb(0 0 0 / 18%) 0px 0px 47px",
                    alignItems: "center",
                    borderRadius: "1rem",
                    padding: "0 2rem",
                    paddingTop: "0.6rem",
                    backgroundColor: "rgb(33, 37, 10)",
                  }}
                >
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <i className="fab fa-android fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small style={{ color: "white" }}>Team</small>
                        <h6 className="mt-n1 mb-0">Android</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <i className="fab fa-chrome fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small style={{ color: "white" }}>Team</small>
                        <h6 className="mt-n1 mb-0">Web</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <i className="fas fa-calendar-check fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small style={{ color: "white" }}>Team</small>
                        <h6 className="mt-n1 mb-0">Event</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <i className="fas fa-cogs fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small style={{ color: "white" }}>Team</small>
                        <h6 className="mt-n1 mb-0">Technical</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <i className="fas fa-magic fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small style={{ color: "white" }}>Team</small>
                        <h6 className="mt-n1 mb-0">Design</h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content" style={{ marginTop: "0px" }}>
                <div id="tab-1" className="tab-pane p-0 active">
                  <div class="container-xxl pt-5 pb-3">
                    <div class="container " style={{ marginBottom: "20px" }}>
                      <div class="d-flex justify-content-center">
                        <Cards
                          name="Mohammed Ali Inamdaar"
                          designation="Android Lead"
                          social="https://www.linkedin.com/in/mohammedaliinamdar
"
                          url="./images/DSC Team/Android Team/Mohammed Ali.jpg"
                        />
                      </div>

                      <div class="row g-4 d-flex justify-content-center">
                        <Cards
                          name="Fazila Sayyed"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/fazila-sayed-2042ba208
"
                          url="./images/DSC Team/Android Team/Fazila.jpg"
                        />
                        <Cards
                          name="Manasi Deokate"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/manasi-deokate-17b9091b8
"
                          url="./images/DSC Team/Android Team/Manasi Deokate.jpeg"
                        />
                        <Cards
                          name="Sadhna Karada"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/sadhana-karad-4017a01ba
"
                          url="./images/DSC Team/Android Team/Sadhna karada.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane   show p-0">
                  <div class="container-xxl pt-5 pb-3">
                    <div class="container">
                      <div class="d-flex justify-content-center">
                        <Cards
                          name="Tanmay Shinde"
                          designation="Web Lead"
                          social="https://www.linkedin.com/in/tanmay-shinde-0670b9192
"
                          url="./images/DSC Team/Web Team/Tanmay Shinde.jpg"
                        />
                      </div>
                      <div class="row g-4 d-flex justify-content-center">
                        <Cards
                          name="Hritik Zende"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/hritikzende98
"
                          url="./images/DSC Team/Web Team/Hritik Zende.jpg"
                        />
                        <Cards
                          name="Sachin Jha"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/sachin-jha-992179217
"
                          url="./images/DSC Team/Web Team/sachin Jha.jpeg"
                        />
                        <Cards
                          name="Kaustubh Trivedi"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/kaustubh-trivedi-459399158
"
                          url="./images/DSC Team/Web Team/kaustybh Trivedi.jpeg"
                        />
                        <Cards
                          name="Vaishnavi Pardesi"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/vaishnavi-pardeshi-303b76204
"
                          url="./images/DSC Team/Web Team/Vaishnavi pardesi.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane   show p-0">
                  <div class="container-xxl pt-5 pb-3">
                    <div class="container">
                      <div class="row g-4 d-flex justify-content-center">
                        <Cards
                          name="Mohammad Anas"
                          designation="Events Lead"
                          social="https://www.linkedin.com/in/mohammad-anas-
"
                          url="./images/DSC Team/Events and Management Team/Mohammad Anas.jpg"
                        />
                        <Cards
                          name="Sakshi Sawant"
                          designation="Management Lead"
                          social="https://www.linkedin.com/in/sakshi-shankar-sawant-3772431b3
"
                          url="./images/DSC Team/Events and Management Team/sakshi sawant.jpg"
                        />
                        <Cards
                          name="Rutuja Shinde"
                          designation="Management Co-Lead"
                          social=""
                          url="./images/DSC Team/Events and Management Team/Rutuja Shinde.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* tab 4 */}
                <div id="tab-4" className="tab-pane   show p-0">
                  <div class="container-xxl pt-5 pb-3">
                    <div class="container">
                      <div class="d-flex justify-content-center">
                        <Cards
                          name="Vedant Bhogawade"
                          designation="Technical Lead"
                          social="https://www.linkedin.com/in/vedantbhogawade-785856193
"
                          url="./images/DSC Team/Technical Team/Vedant Bhogawade.jpeg"
                        />
                      </div>
                      <div class="row g-4 d-flex justify-content-center">
                        <Cards
                          name="Aditi Gangadhar"
                          designation="Technical Team Member"
                          social="https://www.linkedin.com/in/aditi-gangadhar-66009b205
"
                          url="./images/DSC Team/Technical Team/Aditi Gangadhar.jpg"
                        />
                        <Cards
                          name="Kaif Khan "
                          designation="Technical Team Member"
                          social="https://www.linkedin.com/in/kaif-khan-129882202
"
                          url="./images/DSC Team/Technical Team/Kaif Khan.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* tab 5 */}
                <div id="tab-5" className="tab-pane   show p-0">
                  <div class="container-xxl pt-5 pb-3">
                    <div class="container">
                      <div class="d-flex justify-content-center">
                        <Cards
                          name="Raj Thakur"
                          designation="Design And Content Lead"
                          social="https://www.linkedin.com/in/raj-thakur-2b946a20b
"
                          url="./images/DSC Team/Content and Design team/Raj Thakur.jpeg"
                        />
                      </div>
                      <div class="row g-4 d-flex justify-content-center">
                        <Cards
                          name="Iram Sayed"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/iram-syed-14030a16b
"
                          url="./images/DSC Team/Content and Design team/Iram Sayyad.jpeg"
                        />
                        <Cards
                          name="Pratik Nikam"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/pratik-nikam-646722222"
                          url="./images/DSC Team/Content and Design team/Pratik Nikam.jpeg"
                        />
                        <Cards
                          name="Sejal Agarwal"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/sejal-agarwal-24876219a
"
                          url="./images/DSC Team/Content and Design team/Sejal Agarwal.jpeg"
                        />
                      </div>
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
  );
};
