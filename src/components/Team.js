import React from "react";
import Mystyle from "./Team.module.css";
import "./style.css";
import MyCard from "./MyCard";
import { teamData } from "../constants";

export const Bar = () => {
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
        {/* <div className="text-center  ">
          <h1 className="text-cente text-primary  my-3">Founding Team</h1>
        </div> */}
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
                <h2>The Board of 2023-24</h2>
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
        <div className="text-center">
          <h1 className="text-center text-danger  my-3">Board of {teamData[0].year}</h1>
        </div>
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
                name={teamData[0].lead.name}
                designation="GDSC TCOER Lead"
                social={teamData[0].lead.social}
                // url="./images/DSC Team/Zahra-dsc.png"
                url={teamData[0].lead.url}
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
              {
                teamData[0].team.map((member) => {
                  return (
                    <MyCard
                      name={member.name}
                      designation={member.designation}
                      social={member.social}
                      url={member.url}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;