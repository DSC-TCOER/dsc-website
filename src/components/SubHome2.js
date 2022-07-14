import React from "react";

const SubHome = ({ url, para, head }) => {
  return (
    <>
      <section id={head} className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="col-md"
            >
              <img
                src={url}
                className="aim-gifs"
                alt=""
                style={{
                  marginTop: "6px",
                  marginBottom: "6px",
                }}
              />
            </div>
            <div className="aim-text col-md">
              <h2>{head}</h2>
              <p style={{ fontSize: "1.3rem" }} className="lead">
                {para}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHome;
