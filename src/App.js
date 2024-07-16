import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


const App = () =>{

  return (
    <h1 className="App">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </h1>
    )

};

export default App;