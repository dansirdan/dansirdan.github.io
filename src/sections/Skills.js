import React from "react";
import { Parallax } from "react-scroll-parallax";

const Skills = () => {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C#",
  ];
  return (
    <section>
      <ul>
        {languages.map((language, index) => (
          <Parallax x={index % 2 === 0 ? [0, -100] : [-100, 0]}>
            <li key={index}>{language}</li>
          </Parallax>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
