const AboutGDSC = () => {
  return (
      <section className="">
          <h1 className="w-fit text-4xl font-bold font-mono text-red-700 px-4 pb-1 border-b-2 border-b-red-700 max-sm:text-3xl">What is GDSC ?</h1>
                  <section className="grid grid-cols-2 gap-x-4 p-4 max-sm:grid-cols-1 max-sm:gap-y-4">
                      <div className="col-span-1">
                          <img src="./images/homeIntro.gif" className="w-full rounded-2xl shadow-xl" />
                      </div>
                      <div className="flex justify-center items-center">
                          {/* <p className="text-3xl text-blue-900 font-medium pb-1 border-b-2 border-b-red-700 max-sm:text-2xl">What is GDSC?</p> */}
                          <p className="text-xl text-center text-slate-950 px-4 py-2 max-sm:text-base">Google Developer Student Clubs are community groups for college and university 
                          students interested in Google developer technologies.<br />Students from all undergraduate or graduate programs 
                          with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer
                           learning environment and build solutions for local businesses and their community. Google Developer Student Clubs is a program
                            supported by Google Developers.
                          </p>
                          {/* <div className="grid grid-cols-2 gap-y-4">
                              <div className="col-span-1 flex flex-row justify-start items-center gap-2 px-4 border-l-4 border-l-blue-700 max-sm:col-span-2">
                                  <p className="text-2xl w-1/2 max-sm:text-base">Number of Events</p>
                                  <p className="text-4xl text-blue-800 max-sm:text-2xl">: 20</p>
                              </div>
                              <div className="col-span-1 flex flex-row justify-start items-center gap-2 px-4 border-l-4 border-l-blue-700 max-sm:col-span-2">
                                  <p className="text-2xl w-1/2 max-sm:text-base">Number of Members</p>
                                  <p className="text-4xl text-blue-800 max-sm:text-2xl">: 540+</p>
                              </div>
                          </div>
                          <div className="w-full my-4">
                          <div className="w-full flex flex-row justify-start items-center gap-2 px-4 border-l-4 border-l-blue-700">
                                  <p className="text-2xl max-sm:text-lg">Started : <span className="text-blue-900">XX June 2021</span></p>
                          </div>
                          </div> */}
                      </div>
                  </section>
              </section>
  )
}

const AboutUs = () => {
    return (
        <section className="">
            <section className="grid grid-cols-2 gap-x-4 p-4 max-sm:grid-cols-1 max-sm:gap-y-4">
                      <div className="flex flex-col justify-center items-center">
                          <p className="text-4xl text-blue-900 font-bold mb-0 max-sm:text-3xl">GDSC TCOER</p>
                          <p className="text-base text-black py-2 text-center max-sm:text-sm">is community group for college and university 
                          students interested in Google developer technologies.Students from all undergraduate or graduate programs 
                          with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer
                           learning environment and build solutions for local businesses and their community. Google Developer Student Clubs is a program
                            supported by Google Developers.
                          </p>
                          <button className="text-2xl text-white font-semibold px-4 py-1.5 rounded-full bg-blue-600 shadow-xl hover:bg-blue-400 max-sm:text-lg">Join now</button>
                      </div>
                      <div className="col-span-1">
                          <img src="./images/homeIntro.gif" className="w-full rounded-2xl shadow-xl" />
                      </div>
                  </section>
              </section>
  )
}

const About = () => {
    return (
        <section>
            {/* <AboutGDSC /> */}
            <AboutUs />
        </section>
    )
}

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <>
//       <div className="">
//         <div className="container-xxl">
//           <div className="container">
//             <div className="row g-5 align-items-center">
//               <div className="col-lg-6 ">
//                 <div className="row g-3">
//                   <div className="col-md">
//                     <img
//                       src="./images/homeIntro.gif"
//                       className="img-fluid"
//                       alt=""
//                       style={{
//                         borderRadius: "3rem",
//                         boxShadow: "5px 5px #e2e8f0",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <h1 className="mb-4 my-4">
//                   Welcome to{" "}
//                   <img
//                     className="img-fluid rounded "
//                     src="./images/dsc-logo.png"
//                     style={{ width: "45px" }}
//                     alt="gdsc logo"
//                   />{" "}
//                   DSC TCOER
//                 </h1>
//                 <hr></hr>
//                 <h2>What is GDSC?</h2>
//                 <br></br>
//                 <h4>
//                   Google Developer Student Clubs are community groups for
//                   college and university students interested in Google developer
//                   technologies.
//                 </h4>
//                 <br></br>
//                 <p>
//                   Students from all undergraduate or graduate programs with an
//                   interest in growing as a developer are welcome. By joining a
//                   GDSC, students grow their knowledge in a peer-to-peer learning
//                   environment and build solutions for local businesses and their
//                   community. Google Developer Student Clubs is a program
//                   supported by Google Developers.
//                 </p>
//                 <br></br>
//                 <div className="row g-4 mb-4">
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center border-start border-5 border-primary px-2">
//                       <div className="ps-2">
//                         <p className="mb-0">Number of</p>
//                         <h6 className="text-uppercase mb-0">Events</h6>
//                       </div>
//                       <h1
//                         className="flex-shrink-0 display-5 text-primary mb-0 mx-3"
//                         data-toggle="counter-up"
//                       >
//                         25
//                       </h1>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="d-flex align-items-center border-start border-5 border-primary px-2">
//                       <div className="ps-2">
//                         <p className="mb-0">Number of</p>
//                         <h6 className="text-uppercase mb-0">Members</h6>
//                       </div>
//                       <h1
//                         className="flex-shrink-0 display-5 text-primary mb-0 mx-3"
//                         data-toggle="counter-up"
//                       >
//                         620+
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
