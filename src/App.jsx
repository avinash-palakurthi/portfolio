import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
