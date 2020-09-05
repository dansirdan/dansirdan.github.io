import React from "react";
import { Parallax } from "react-scroll-parallax";

const Header = () => {
  return (
    <header>
      <Parallax y={[-200, 100]} tagOuter="h1">
        <h1>Dan Mont-Eton</h1>
      </Parallax>
      <p>Full Stack Developer</p>
    </header>
  );
};

export default Header;
