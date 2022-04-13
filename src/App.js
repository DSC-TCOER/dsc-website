
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import { Team } from './components/Team';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Events from './components/Events';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>

          <Route path="/team" element={<Team />}>
          </Route>

          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/contact" element={<Contact />}>
          </Route>

          <Route path="/events" element={<Events />}>
          </Route>

          <Route path="/footer" element={<Footer />}>
          </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
