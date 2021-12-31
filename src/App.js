
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Login } from './components/Login';
import { Team } from './components/Team';
// import Contact from './components/Contact';
// import Signup from './components/Signup';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>
          
        </Switch>

      </Router>
    </>
  );
}

export default App;
