import React from "react";
import Mystyle from "./Team.module.css";
import "./style.css";
import MyCard from "./MyCard";

const Bar = () => {
  return (
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
        <li className="nav-item teams-nav">
          <a
            className="d-flex align-items-center text-start mx-3 pb-2 active"
            data-bs-toggle="pill"
            href="#tab-1"
          >
            <i className="fab fa-chrome fa-2x"></i>
            <div className="ps-3">
              <h5 style={{ paddingTop: "5px" }} className="mt-n1 mb-0">
                Web
              </h5>
              <h6 className="mb-0">Team</h6>
            </div>
          </a>
        </li>
        <li className="nav-item teams-nav">
          <a
            className="d-flex align-items-center text-start mx-3 me-0 pb-2"
            data-bs-toggle="pill"
            href="#tab-2"
          >
            <i className="fas fa-magic fa-2x "></i>
            <div className="ps-3">
              <h5 style={{ paddingTop: "5px" }} className="mt-n1 mb-0">
                Design
              </h5>
              <h6 className="mb-0">Team</h6>
            </div>
          </a>
        </li>
        <li className="nav-item teams-nav">
          <a
            className="d-flex align-items-center text-start mx-3 me-0 pb-2"
            data-bs-toggle="pill"
            href="#tab-3"
          >
            <i className="fas fa-cogs fa-2x "></i>
            <div className="ps-3">
              <h5 style={{ paddingTop: "5px" }} className="mt-n1 mb-0">
                Technical
              </h5>
              <h6 className="mb-0">Team</h6>
            </div>
          </a>
        </li>
        <li className="nav-item teams-nav">
          <a
            className="d-flex align-items-center text-start mx-3 ms-0 pb-2 "
            data-bs-toggle="pill"
            href="#tab-4"
          >
            <i className="fab fa-android fa-2x"></i>
            <div className="ps-3">
              <h5 style={{ paddingTop: "5px" }} className="mt-n1 mb-0">
                Android
              </h5>
              <h6 className="mb-0">Team</h6>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Team = () => {
  return (
    <>
      <div className="my-3 ">
        <div className="text-center  ">
          <h1 className="text-cente text-primary  my-3">Founding Team</h1>
        </div>
        <section id="learn" style={{ background: "#d4d7da" }}>
          <div className="container">
            <div
              className="row align-items-center justify-content-between"
              style={{ padding: "2rem" }}
            >
              <div style={{ textAlign: "right" }} className="col-md">
                <img
                  src="./images/team.gif"
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "2rem", width: "40rem" }}
                />
              </div>
              <div
                id="need-responsive"
                className="col-md"
                style={{ padding: "2rem 0.5rem" }}
              >
                <h2>The Board of 2021-22</h2>
                <h2 className="lead">
                  <em>
                    “Coming together is a beginning, staying together is
                    progress, and working together is success.”
                  </em>{" "}
                  <b>~ Henry Ford</b>
                </h2>
                <h2 style={{ fontSize: "1rem", fontWeight: "300" }}>
                  We at Google Developer Student Club, TCOER believe that what a
                  strong group of people can accomplish together is much larger
                  and far greater than what an individual can achieve alone.
                </h2>
                <h2 style={{ fontSize: "1rem", fontWeight: "300" }}>
                  Our Core team has left no stone unturned and constantly worked
                  to help each member grow by sharing useful learning resources,
                  organizing events on different technologies and providing
                  guidance for exploring various domains of their interest."
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <div className="container-xxl py-5 ">
          <div className="container">
            {/* Community lead card */}

            <div
              style={{ width: "50%", margin: "auto", marginTop: "6rem" }}
              className="text-center border-bottom border-4 border-primary px-1"
            >
              <h1 className=" text-primary">Community Lead</h1>
            </div>
            <div
              style={{ marginTop: "3rem" }}
              className="d-flex justify-content-center"
            >
              <MyCard
                name="Zahra Dehghan"
                designation="GDSC TCOER Lead"
                social="https://www.linkedin.com/in/zahra-dehghan-8ab05b193"
                // url="./images/DSC Team/Zahra-dsc.png"
                url="./images/DSC Team/Zahra-dsc.jpg"
              />
            </div>

            <div
              style={{ width: "50%", margin: "auto", marginTop: "4rem" }}
              className="text-center border-bottom border-4 border-primary px-1"
            >
              <h1 className="text-primary">Core Team</h1>
            </div>
            <div
              style={{
                gap: "4rem",
                margin: "auto",
                marginTop: "3rem",
              }}
              className="row g-4 d-flex justify-content-center"
            >
              <MyCard
                name="Vedant Bhogawade"
                designation="Technical Lead"
                social="https://www.linkedin.com/in/vedantbhogawade-785856193"
                url="./images/DSC Team/Technical Team/Vedant Bhogawade-dsc.jpg"
              />
              <MyCard
                name="Mohammed Ali Inamdar"
                designation="Android Lead"
                social="https://www.linkedin.com/in/mohammedaliinamdar"
                url="./images/DSC Team/Android Team/Mohammed Ali-dsc.jpg"
              />
              <MyCard
                name="Tanmay Shinde"
                designation="Web Lead"
                social="https://www.linkedin.com/in/tanmay-shinde-0670b9192"
                url="./images/DSC Team/Web Team/Tanmay Shinde-dsc.jpg"
              />
              <MyCard
                name="Mohammad Anas"
                designation="Events Lead"
                social="https://www.linkedin.com/in/mohammad-anas-"
                url="./images/DSC Team/Events and Management Team/Mohammad Anas-dsc.jpg"
              />
              <MyCard
                name="Raj Thakur"
                designation="Design And Content Lead"
                social="https://www.linkedin.com/in/raj-thakur-2b946a20b"
                url="./images/DSC Team/Content and Design team/Raj Thakur-dsc.jpg"
              />
              <MyCard
                name="Sakshi Sawant"
                designation="Management Lead"
                social="https://www.linkedin.com/in/sakshi-shankar-sawant-3772431b3"
                url="./images/DSC Team/Events and Management Team/sakshi sawant-dsc-test.jpg"
              />
              <MyCard
                name="Rutuja Shinde"
                designation="Management Co-Lead"
                social=""
                url="./images/DSC Team/Events and Management Team/Rutuja Shinde-dsc.jpg"
              />
            </div>

            <div
              style={{ width: "50%", margin: "auto", marginTop: "6rem" }}
              className="text-center border-bottom border-3 border-primary px-1"
            >
              <h2 className="text-primary">Volunteering Members</h2>
            </div>
            <div className="tab-class text-center my-5">
              <Bar />
              <div className="tab-content" style={{ marginTop: "0px" }}>
                {/* Domain teams */}

                <div id="tab-1" className="tab-pane p-0 active">
                  <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                      <div
                        style={{ gap: "3rem" }}
                        className="row g-4 d-flex justify-content-center"
                      >
                        <MyCard
                          name="Hritik Zende"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/hritikzende98"
                          url="./images/DSC Team/Web Team/Hritik Zende.jpg"
                        />
                        <MyCard
                          name="Sachin Jha"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/sachin-jha-992179217"
                          url="./images/DSC Team/Web Team/sachin Jha.jpeg"
                        />
                        <MyCard
                          name="Kaustubh Trivedi"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/kaustubh-trivedi-459399158"
                          url="./images/DSC Team/Web Team/kaustybh Trivedi.jpeg"
                        />
                        <MyCard
                          name="Vaishnavi Pardesi"
                          designation="Web Team Member"
                          social="https://www.linkedin.com/in/vaishnavi-pardeshi-303b76204"
                          url="./images/DSC Team/Web Team/Vaishnavi pardesi.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab-2" className="tab-pane show p-0">
                  <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                      <div
                        style={{ gap: "3rem" }}
                        className="row g-4 d-flex justify-content-center"
                      >
                        <MyCard
                          name="Iram Syed"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/iram-syed-14030a16b"
                          url="./images/DSC Team/Content and Design team/Iram Sayyad.jpeg"
                        />
                        <MyCard
                          name="Pratik Nikam"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/pratik-nikam-646722222"
                          url="./images/DSC Team/Content and Design team/Pratik Nikam.jpeg"
                        />
                        <MyCard
                          name="Sejal Agarwal"
                          designation="Design And Content Team Member"
                          social="https://www.linkedin.com/in/sejal-agarwal-24876219a"
                          url="./images/DSC Team/Content and Design team/Sejal Agarwal.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab-3" className="tab-pane show p-0">
                  <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                      <div
                        style={{ gap: "3rem" }}
                        className="row g-4 d-flex justify-content-center"
                      >
                        <MyCard
                          name="Aditi Gangadhar"
                          designation="Technical Team Member"
                          social="https://www.linkedin.com/in/aditi-gangadhar-66009b205"
                          url="./images/DSC Team/Technical Team/Aditi Gangadhar.jpg"
                        />
                        <MyCard
                          name="Kaif Khan "
                          designation="Technical Team Member"
                          social="https://www.linkedin.com/in/kaif-khan-129882202"
                          url="./images/DSC Team/Technical Team/Kaif Khan.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab-4" className="tab-pane show p-0">
                  <div className="container-xxl pt-5 pb-3">
                    <div
                      className="container "
                      style={{ marginBottom: "20px" }}
                    >
                      <div
                        style={{ gap: "3rem" }}
                        className="row g-4 d-flex justify-content-center"
                      >
                        <MyCard
                          name="Fazila Sayyed"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/fazila-sayed-2042ba208"
                          url="./images/DSC Team/Android Team/Fazila.jpg"
                        />
                        <MyCard
                          name="Manasi Deokate"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/manasi-deokate-17b9091b8"
                          url="./images/DSC Team/Android Team/Manasi Deokate.jpeg"
                        />
                        <MyCard
                          name="Sadhna Karada"
                          designation="Android Team Member"
                          social="https://www.linkedin.com/in/sadhana-karad-4017a01ba"
                          url="./images/DSC Team/Android Team/Sadhna karada.jpeg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ width: "50%", margin: "auto", marginTop: "6rem" }}
              className="text-center border-bottom border-3 border-primary px-1"
            >
              <h2 className="text-primary">Website Development Team</h2>
            </div>
            <div
              style={{
                gap: "3rem",
                margin: "auto",
                marginTop: "3rem",
                marginBottom: "3rem",
              }}
              className="row g-4 d-flex justify-content-center"
            >
              <MyCard
                name="Sachin Jha"
                social="https://www.linkedin.com/in/sachin-jha-992179217"
                url="./images/DSC Team/Web Team/sachin Jha.jpeg"
              />
              <MyCard
                name="Tanmay Shinde"
                social="https://www.linkedin.com/in/tanmay-shinde-0670b9192"
                url="./images/DSC Team/Web Team/Tanmay Shinde.jpg"
              />
              <MyCard
                name="Kaustubh Trivedi"
                social="https://www.linkedin.com/in/kaustubh-trivedi-459399158"
                url="./images/DSC Team/Web Team/kaustybh Trivedi.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
