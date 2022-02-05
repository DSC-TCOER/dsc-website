
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import { Team } from './components/Team';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Events from './components/Events';




function App() {
  return (
    <>
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
