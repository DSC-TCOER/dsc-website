import React from "react";
import "./subHome.css";

const SubHome = ({ url, para, head }) => {
  return (
    <>
      <section id="learn" class="p-5" style={{ background: "#d4d7da" }}>
        <div class="container">
          <div
            class="row align-items-center justify-content-between"
            style={{ padding: "2rem" }}
          >
            <div style={{ textAlign: "right" }} class="col-md">
              <img
                src={url}
                class="img-fluid"
                alt=""
                style={{ borderRadius: "3rem", width: "40rem" }}
              />
            </div>
            <div
              id="need-responsive"
              class="col-md"
              style={{ padding: "2rem 0.5rem" }}
            >
              <h2>{head}</h2>
              <p class="lead">{para}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHome;
