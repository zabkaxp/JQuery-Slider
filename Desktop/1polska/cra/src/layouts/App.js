import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/app.css";
import Header from "./Header";
import Highlights from "./Highlights";
import Footer from "./Footer";
import Demands from "./Demands";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <section>{<Highlights />}</section>
            <section>{<Demands />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
