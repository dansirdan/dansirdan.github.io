import React from 'react';
import { Chip } from 'react-materialize';
import './style.css';

const Chips = () => {

  const skills = ['MERN', 'SERN', 'HTML ES6+', 'CSS 5', 'Javascript', 'C#', 'Node.js', 'Express', 'SQL', 'MongoDB', 'Azure', 'MSSQL', 'Angular', 'React', 'git']

  return (
    <>
      {skills.map((skill, index) => (
        <Chip
          className={index >= 6 ? `red darken-${index - 6}` : `red lighten-${index}`}
          key={index}
          close={false}
          options={null}
        >
          {skill}
        </Chip>
      ))}
    </>
  );
};

export default Chips;