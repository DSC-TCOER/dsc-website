import React from "react";
import { teamData } from "../constants";
import { BatchTeam } from "../components";

const TeamIntro = () => {
    return (
        <section id="learn" className="bg-slate-300 mt-10">
          <div className="container">
            <div
              className="flex flex-row justify-center items-center p-8 gap-4 max-sm:flex-wrap"
            >
                <img
                  src="./images/team.gif"
                  className="w-full rounded-xl"
                  alt=""
                />
              <div
                className=""
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
    )
}
const Team = () => {
    return (
        <div>
            <TeamIntro />
            <BatchTeam title="Team" data={teamData[0]} />
        </div>
    )
}

export default Team;