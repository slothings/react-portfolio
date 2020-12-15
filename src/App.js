import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import Contact from "./pages/Contact/Contact.js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Redirect from="*" to="/about" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;