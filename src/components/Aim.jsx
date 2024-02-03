import "bootstrap/dist/css/bootstrap.min.css";

const aims = [{
    title:"Connect",
    image:"./images/connect.gif",
    description:"Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.",
},
    {
        title:"Learn",
        image:"./images/Online-learning.gif",
        description:"Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person."
    },
    {
        title:"Grow",
        image:"./images/growth2.gif",
        description:"Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn, too."
    }
]

const AimCard = ({index,title,image,description}) =>{
    return (
        <div className={`w-1/3 col-span-1 flex flex-col justify-center items-center gap-2 px-2 py-2 ${index%2===0?"bg-slate-100":""} shadow-xl border-b-2 border-r-2 border-blue-200 hover:translate-x-1 hover:translate-y-1 max-sm:w-full`}>
            <img src={image} className="w-full h-60" />
            <p className="text-2xl font-semibold px-2 mb-0 max-sm:text-xl">{title}</p>
            <p className="text-center text-lg px-4 max-sm:text-base ">{description}</p>
        </div>
    )
}

const Aim = () => {
    return (
        <>
        <section className="flex flex-col justify-center items-center my-4">
            <h1 className="w-fit text-4xl font-bold font-mono text-blue-700 px-4 pb-1 border-b-2 border-b-red-700">Our Aim</h1>
            <div className="flex flex-row justify-center items-center gap-2 p-4 max-sm:flex-wrap max-sm:my-4">
                {
                    aims.map((aim,index)=>{
                        return <AimCard key={index} index={index} title={aim.title} image={aim.image} description={aim.description} />
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Aim;