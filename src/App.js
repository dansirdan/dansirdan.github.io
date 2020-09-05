import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import "./App.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="wrapper">
        <Header />
        <About />
        <Skills />
      </div>
    </ParallaxProvider>
  );
}

export default App;
