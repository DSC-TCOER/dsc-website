import React from "react";

const MemberCard = ({name,social,designation,imgUrl}) => {
    return (
        <div className="relative group overflow-hidden">
            <img src={imgUrl} className="w-60 h-80 object-cover rounded-xl group-hover:brightness-50" />
            <div className="absolute bottom-[-100%] text-white w-full flex flex-col justify-center items-center pb-2 pt-8 bg-gradient-to-t from-black transition ease-in-out delay-150 group-hover:bottom-0">
                <p className="mb-0 text-xl text-center font-mono font-bold text-slate-200">{name}</p>
                <p className="mb-0 text-base font-semibold text-blue-400">{designation}</p>
                <div>
                    <a href={social} className="w-4 h-4">
                    <img src="./images/logos/linkedin.svg"  alt="LinkedIn" className="w-4 h-4"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

const BatchTeam = ({title,data}) => {
    return (
        <div>
            <section className="mx-4 my-8 flex flex-col justify-center items-center">
                <h1 className="w-fit text-slate-900 px-4 pb-1 mb-4 border-b-2 border-red-400">{title}</h1>
                {/* <h1 className="w-fit text-slate-900 px-4 pb-1 border-b-2 border-red-400 self-start">Lead</h1> */}
                <MemberCard name={data.lead.name} designation="GDSC Community Lead" social={data.lead.social} imgUrl={data.lead.url} />
                <section className="mt-4 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
                    {
                        data.coreTeam.map((member)=>{
                            return (
                                <div className="col-span-1">
                                <MemberCard name={member.name} designation={member.designation} social={member.social} imgUrl={member.url} />
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </div>)
}

export default BatchTeam;