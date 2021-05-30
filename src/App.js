import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <Router>
      <Route path={process.env.PUBLIC_URL + '/'} />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );  
}

export default App;
