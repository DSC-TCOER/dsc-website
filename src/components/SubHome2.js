import React from "react";

const SubHome = ({ url, para, head, addClass }) => {
  if(addClass == 'odd') {
    return (
      <>
        <section id="learn" class="p-5">
          <div class="container">
            <div class="row align-items-center justify-content-between">
            <div style={{display: 'flex', justifyContent: 'center'}} class="col-md">
                <img
                  src={url}
                  class="img-fluid"
                  alt=""
                  style={{
                    borderRadius: "44px",
                    marginTop: "6px",
                    marginBottom: "6px",
                    width: '45rem'
                  }}
                />
              </div>
              <div class="col-md p-5">
                <h2>{head}</h2>
                <p style={{fontSize: '1.7rem'}} class="lead">{para}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  else return(
      <>
        <section id="learn" class="p-5">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-md p-5">
                <h2>{head}</h2>
                <p style={{fontSize: '1.7rem'}} class="lead">{para}</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}} class="col-md">
                <img
                  src={url}
                  class="img-fluid"
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
