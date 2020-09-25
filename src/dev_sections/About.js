import React from "react";
import Container from "@material-ui/core/Container";

import Bio from "../dev_components/Bio";
import Pitch from "../dev_components/Pitch";
import Skills from "../dev_components/Skills";
import Projects from "../dev_components/Projects";

const About = () => {
  return (
    <main>
      <Container maxWidth='lg'>
        <Bio />
        <Projects />
        <Skills />
        <Pitch />
      </Container>
    </main>
  );
};

export default About;
