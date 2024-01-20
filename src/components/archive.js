import React from "react";
import "./style.css";
import MyCard from "./MyCard";
import { teamData } from "../constants/index"

export const Archive = () => {
  return (
    <>

      {
        teamData.map((batch) => {
          return (
            <div className="">
              <div className="text-center">
                <h1 className="text-center text-danger  my-3">Board of {batch.year}</h1>
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
                      name={batch.lead.name}
                      designation="GDSC TCOER Lead"
                      social={batch.lead.social}
                      // url="./images/DSC Team/Zahra-dsc.png"
                      url={batch.lead.url}
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
                      batch.team.map((member) => {
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
          )
        })
      }
    </>
  );
};

export default Archive;