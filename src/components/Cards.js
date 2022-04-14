import React from "react";

function Cards({ name, designation, social, url }) {
  console.log("mounted");
  return (
    <>
      <div
        className="col-lg-3 col-md-6 my-4 mx-2"
        style={{
          borderRadius: "19px",
          width: "255px",
          boxShadow: "0 0 47px rgb(0 0 0 / 43%)",
        }}
      >
        <div className="team-item text-center rounded overflow-hidden" style={{}}>
          <div className="rounded-circle overflow-hidden  m-4">
            <img
              className="img-fluid"
              src={url}
              alt="Profile Picture"
            />
          </div>
          <h5 className="mb-0">{name}</h5>
          <small>{designation}</small>
          <div className="d-flex justify-content-center mt-3">
            {/* <a className="btn btn-square btn-primary mx-1 rounded-circle wave" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary mx-1 rounded-circle wave" href=""><i className="fab fa-instagram"></i></a> */}
            <a
              className="btn btn-square btn-primary mx-1 rounded-circle wave"
              href={social}
              target="_blank"
              style={{marginBottom: '0px'}}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
