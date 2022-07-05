import React from "react";
import "./subHome.css";

const SubHome = ({ url, para, head }) => {
  return (
    <>
      <section id="learn" className="p-5" style={{ background: "#d4d7da" }}>
        <div className="container">
          <div
            className="row align-items-center justify-content-between"
            style={{ padding: "2rem" }}
          >
            <div style={{ textAlign: "right" }} className="col-md">
              <img
                src={url}
                className="img-fluid"
                alt=""
                style={{ borderRadius: "3rem", width: "40rem" }}
              />
            </div>
            <div
              id="need-responsive"
              className="col-md"
              style={{ padding: "2rem 0.5rem" }}
            >
              <h2 style={{fontSize: '2.5rem'}}>{head}</h2>
              <p style={{fontSize: '19px'}} className="lead">{para}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHome;
