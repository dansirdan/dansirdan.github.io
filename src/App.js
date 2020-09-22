import React from "react";
import { About, Main, Projects, Skills } from "./sections/index";
import CustomFooter from "./components/Footer";
import CustomFAB from "./components/CustomFAB";
import BlockQuote from "./components/BlockQuote";
import ScrollEffect from "./components/ReactScroll/scrolltest";
// import './App.css';

const App = () => {
  return (
    <div>
      <ScrollEffect>
        <Main />
        <BlockQuote />
        <About />
        <Skills />
        <Projects />
        <CustomFAB />
        <CustomFooter />
      </ScrollEffect>
    </div>
  );
};

export default App;
