import React from "react";
import "./style.css";
import MyCard from "./MyCard";

export const Archive = () => {
  return (
    <>

      {/* BATCH OF 2022-23 */}

      <div className="">
        <div className="text-center">
          <h1 className="text-center text-danger  my-3">Board of 2022-23</h1>
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
                name="Saba Sayyed"
                designation="GDSC TCOER Lead"
                social="https://www.linkedin.com/in/saba-sayyed-568539232/"
                // url="./images/DSC Team/Zahra-dsc.png"
                url="./images/DSC Team/Saba-Sayyed.jpg"
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
                name="Eeshan Mishra"
                designation="Technical Lead"
                social="https://www.linkedin.com/in/eeshanmishra01/"
                url="./images/DSC Team/Technical Team/Eeshan-Mishra.jpg"
              />
              <MyCard
                name="Faizan Kalkoti"
                designation="Android Lead"
                social="https://www.linkedin.com/in/faizan-kalkoti-40994121a/"
                url="./images/DSC Team/Android Team/FaizanKalkoti.jpg"
              />
              <MyCard
                name="Girish Bansode"
                designation="Web Lead"
                social="https://www.linkedin.com/in/girishban/"
                url="./images/DSC Team/Web Team/Girish-Bansode.jpg"
              />
              <MyCard
                name="Prasanna Shinde"
                designation="Events Lead"
                social="https://www.linkedin.com/in/prasanna-shinde-298b74231/"
                url="./images/DSC Team/Events and Management Team/Prasanna-Shinde.jpg"
              />
              <MyCard
                name="Aum Battul"
                designation="Design And Content Lead"
                social="https://www.linkedin.com/in/aum-battul-4b42801bb/"
                url="./images/DSC Team/Content and Design team/AumBattul.jpg"
              />

              {/*  
            
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
              
              
              */}
            </div>

          </div>
        </div>

      </div>
      <div
        style={{ width: "100%", margin: "auto", marginTop: "4rem" , marginBottom: "4rem"}}
        className="text-center border-bottom border-4 border-primary px-1"
      >
      </div>
      {/* BATCH OF 2021-22 */}
      <div className="">
        <div className="text-center">
          <h1 className="text-center text-danger  my-3">Board of 2021-22</h1>
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
                name="Zahra Dehghan"
                designation="GDSC TCOER Lead"
                social="https://www.linkedin.com/in/zahra-dehghan-8ab05b193/"
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
                social="https://www.linkedin.com/in/vedantbhogawade-785856193/"
                url="./images/DSC Team/Technical Team/Vedant Bhogawade-dsc.jpg"
              />
              <MyCard
                name="Mohammad Ali Inamdar"
                designation="Android Lead"
                social="https://www.linkedin.com/in/mohammedaliinamdar/"
                url="./images/DSC Team/Android Team/Mohammed Ali-dsc.jpg"
              />
              <MyCard
                name="Tanmay Shinde"
                designation="Web Lead"
                social="https://www.linkedin.com/in/tanmay-p-shinde/"
                url="./images/DSC Team/Web Team/Tanmay Shinde.jpg"
              />
              <MyCard
                name="Mohammad Anas"
                designation="Events Lead"
                social="https://www.linkedin.com/in/mohammad-anas-/"
                url="./images/DSC Team/Events and Management Team/Mohammad Anas-dsc.jpg"
              />
              <MyCard
                name="Raj Thakur"
                designation="Design And Content Lead"
                social="https://www.linkedin.com/in/raj-thakur-2b946a20b/"
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

          </div>
        </div>

      </div>
    </>
  );
};

export default Archive;