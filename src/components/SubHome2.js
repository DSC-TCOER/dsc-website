import React from "react";

const SubHome = ({ url, para, head, addClass }) => {
  if(addClass == 'odd') {
    return (
      <>
        <section id={head} className="p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
            <div style={{display: 'flex', justifyContent: 'center'}} className="col-md">
                <img
                  src={url}
                  className="img-fluid"
                  alt=""
                  style={{
                    borderRadius: "44px",
                    marginTop: "6px",
                    marginBottom: "6px",
                    width: '45rem'
                  }}
                />
              </div>
              <div className="col-md p-5">
                <h2>{head}</h2>
                <p style={{fontSize: '1.7rem'}} className="lead">{para}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  else return(
      <>
        <section id={head} className="p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-5">
                <h2>{head}</h2>
                <p style={{fontSize: '1.7rem'}} className="lead">{para}</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}} className="col-md">
                <img
                  src={url}
                  className="img-fluid"
                  alt=""
                  style={{
                    borderRadius: "44px",
                    marginTop: "6px",
                    marginBottom: "6px",
                    width: '45rem'
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default SubHome;
