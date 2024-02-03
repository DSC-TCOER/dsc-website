import React from "react";
import { teamData } from "../constants";
import { BatchTeam } from "../components";

const Alumini = () => {
    return(
        <div className="mt-20 mx-4 flex flex-col justify-center items-center gap-8">
            {
                teamData.map((batch)=>{
                    return(<BatchTeam title={"Board of "+batch.year} data={batch} />)
                })
            }
        </div>
    )
}

export default Alumini;