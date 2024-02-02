import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import {Alumini, Home,Team} from "./pages"

// import { Team } from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Events from "./components/Events";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import BackToTop from "./components/BacktoTop";
import { Archive } from "./components/archive";

function App() {
  // const [show, setShow] = useState("");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > 500) {
      document.querySelector(".btt-icon").style.opacity = "100%";
      document.querySelector(".btt-icon").style.bottom = "20px";
    } else {
      document.querySelector(".btt-icon").style.bottom = "-120px";

      document.querySelector(".btt-icon").style.opacity = "0%";
      // document.querySelector(".brand-logo2").style.top = "0%";
      // document.querySelector(".header_navlinks-wrapper").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <BackToTop />
      <Router>
        <div
          style={{
            height: "100vh",
          }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/team" element={<Team />}></Route>

            {/* <Route path="/about" element={<About />}></Route> */}

            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/events" element={<Events />}></Route>

            <Route path="/alumini" element= {<Alumini />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
