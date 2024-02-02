import React, { useState } from "react"
import { Link } from "react-router-dom"

const navlinks = [
    {
        name: "Home",
        url: ""
    },
    {
        name: "Events",
        url: "/events"
    },
    {
        name: "Team",
        url: "/team"
    },
    {
        name: "Contact Us",
        url: "/contact"
    }
    ,
    // {
    //     name: "Blogs",
    //     url: "/blogs"
    // },
    {
        name: "Alumini",
        url: "/alumini"
    },
]

const Navbar = () => {
    const [menuListed,setMenuListed] = useState(false)

    return (
        <nav className="fixed w-screen top-0 z-[10]">
        <div className="w-screen bg-white flex flex-row justify-between items-center p-2 shadow-xl">
            <div className="flex flex-row justify-center items-center gap-3">
                <img src="./logo.png" alt="logo" className="w-16 h-auto max-sm:w-8" />
                <div className="flex flex-col justify-center items-start">
                    <p className="text-lg font-semibold max-sm:text-base mb-0"><span className="text-red-600">Google</span> <span className="text-blue-600">Student</span> <span className="text-yellow-600">Developer</span> <span className="text-green-600">Club</span></p>
                    <p className="text-sm text-slate-800 font-medium max-sm:text-xs mb-0">Trinity College of Engineering And Research</p>
                </div>
            </div>
            <div className="text-lg text-slate-950 font-medium flex flex-row justify-center items-center gap-4 max-sm:hidden">
                {
                    navlinks.map((element) => {
                        return (
                            <Link to={element.url} className="hover:text-blue-700">{element.name}</Link>
                        )
                    })
                }

                {/* <button className="py-1 px-4 bg-blue-600 text-white rounded-full hover:bg-teal-600">Sign Up</button>
                <button className="py-1 px-4 bg-blue-600 text-white rounded-full hover:bg-teal-600">Log in</button> */}
            </div>
            <div className="md:hidden transition ease-in-out delay-100 duration-200">
                <img src="./images/logos/menu.svg" className="w-6 h-6 mr-2" onClick={()=>{setMenuListed(!menuListed)}} />
                {/* {
                    menuListed && <div className="fixed left-0 top-0 w-screen h-screen bg-sky-50 flex flex-col justify-start items-center gap-6 py-8">
                    <img src="./images/logos/close.svg" className="self-start ml-2 w-8 h-8" onClick={()=>setMenuListed(false)} />
                    {    navlinks.map((element) => {
                        return (
                            <Link to={element.url} className="hover:text-blue-700 max-sm:text-2xl" onClick={()=>{setMenuListed(false)}}>{element.name}</Link>
                        )
                    })}
                    </div>
                } */}
            </div>
        </div>
        <div>
            {
                menuListed && <div className="w-screen h-fit bg-white flex flex-col justify-start items-start gap-1 px-2 py-2 shadow-lg">
                {    navlinks.map((element) => {
                    return (
                        <Link to={element.url} className="w-full hover:text-blue-700 max-sm:text-xl" onClick={()=>{setMenuListed(false)}}>{element.name}</Link>
                    )
                })}
                </div>
            }
        </div>
        </nav>
    )
}

export default Navbar



// import React, { useEffect, useRef } from "react";
// import "./style.css";
// import { Link } from "react-router-dom";
// // import $ from 'jquery';

// const Navbar = () => {
//   const ref = useRef();
//   useEffect(() => {
//     const tab = window.location.href.split("/").slice(-1)[0].toLowerCase();
//     const currentTab = document.querySelector(`.nav-link[name = '${tab}']`);
//     currentTab.classList.add("active");
//     console.log(currentTab);
//   }, []);

//   const BackToTopHandler = (e) => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };
//   function navItemsHandler(e) {
//     // const tab = e.target.href.split("/").slice(-1)[0].toLowerCase();

//     setTimeout(() => BackToTopHandler(), 50);
//     var elems = document.querySelector(".active");
//     if (elems !== null) {
//       elems.classList.remove("active");
//     }
//     if (e.target.classList.contains("nav-link")) {
//       e.target.parentElement.className += " active";
//     } else e.target.className += " active";
//     ref.current.classList.remove("show");
//   }
//   // const toggleDarkMode = () => {
//   //   let body = document.body;
//   //   body.classList.toggle("dark-mode");
//   //   console.log(body);
//   // };
//   return (
//     <>
//       <nav
//         style={{
//           boxShadow:
//             "0 0.9px 2.2px rgba(0, 0, 0, 0.039), 0 2.2px 5.3px rgba(0, 0, 0, 0.048), 0 4.1px 10px rgba(0, 0, 0, 0.052), 0 7.4px 17.9px rgba(0, 0, 0, 0.057), 0 13.8px 33.4px rgba(0, 0, 0, 0.067),0 33px 80px rgba(0, 0, 0, 0.11)",
//           padding: "0.4em 6px",
//         }}
//         className="navbar fixed-top navbar-expand-lg navbar-light bg-light "
//       >
//         {/* <div className="container-fluid"> */}
//         {/* Brand Component */}
//         <Link style={{ padding: "0px 0px" }} className="navbar-brand" to="/">
//           <div className="nav-brand">
//             <img src="./images/dsc-logo.png" alt="DSC TCOER Logo"></img>
//             <div className="text">
//               <div className="club">Google Developer Student Club</div>
//               <div className="college">
//                 Trinity College of Engineering and Research
//               </div>
//             </div>
//           </div>
//         </Link>
//         {/* Responsive button Part start */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           style={{
//             boxShadow:
//               "rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset",
//           }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {/* responsive button part end */}
//         <div
//           ref={ref}
//           className="collapse navbar-collapse"
//           id="navbarSupportedContent"
//           style={{
//             justifyContent: "end",
//             marginLeft: "1.5rem",
//             marginRight: "1.5rem",
//           }}
//         >
//           {/* Menu Box */}
//           <div style={{ display: "flex", flexDirection: "row" }}>
//             <ul
//               style={{
//                 justifyContent: "space-evenly",
//                 margin: "auto",
//                 fontSize: "1rem",
//               }}
//               className="navbar-nav me-auto mb-2 mb-lg-0"
//             >
//               <li className="nav-item" onClick={navItemsHandler}>
//                 <Link
//                   // activeClassName="active"
//                   className="nav-link"
//                   aria-current="page"
//                   name=""
//                   to="/"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item" onClick={navItemsHandler}>
//                 <Link className="nav-link" to="/Team" name="team">
//                   Teams
//                 </Link>
//               </li>
//               <li className="nav-item" onClick={navItemsHandler}>
//                 <Link className="nav-link" to="/events" name="events">
//                   Events
//                 </Link>
//               </li>
//               <li className="nav-item" onClick={navItemsHandler}>
//                 <Link className="nav-link" to="/contact" name="contact">
//                   Contact Us
//                 </Link>
//               </li>
//               <li className="nav-item" onClick={navItemsHandler}>
//                 <Link className="nav-link" to="/archive" name="archive">
//                   Archive
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                 <div className="nav-link" onClick={toggleDarkMode}>
//                   Dark Mode
//                 </div>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//         {/* </div> */}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
