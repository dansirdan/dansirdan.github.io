import React from "react";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section>
      <Parallax x={[0, -100]}>
        <p>This will be a quote.</p>
      </Parallax>
    </section>
  );
};

export default About;
