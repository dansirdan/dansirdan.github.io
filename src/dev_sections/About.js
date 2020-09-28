import React from "react";
import Bio from "../dev_components/Bio";
import Pitch from "../dev_components/Pitch";
import Skills from "../dev_components/Skills";
import Projects from "../dev_components/Projects";
import DividerBox from "../dev_components/DividerBox";

const About = () => {
  return (
    <main>
      <Bio />
      <DividerBox/>
      <Projects />
      <Skills />
      <Pitch />
    </main>
  );
};

export default About;
