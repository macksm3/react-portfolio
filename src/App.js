import React from "react";
import { BrowserRouter as Router, Route, generatePath } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael Macks McCosh</h1>
      </header>
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
