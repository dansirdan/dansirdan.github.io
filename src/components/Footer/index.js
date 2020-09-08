import React from 'react';
import { Footer } from 'react-materialize';
import Social from '../Social';

const CustomFooter = () => {

  return (
    <Footer
      className="custom footer"
      copyrights="&copy; 2020 Dan Mont-Eton"
      links={
        <ul>
          <li><h5>Built with:</h5></li>
          <li><a className="grey-text text-lighten-3" href="https://reactjs.org/">React</a></li>
          <li><a className="grey-text text-lighten-3" href="http://react-materialize.github.io/">react-materialize</a></li>
          <li><a className="grey-text text-lighten-3" href="https://material.io">material.io</a></li>
          <li><a className="grey-text text-lighten-3" href="https://www.npmjs.com/package/clipboard-copy">clipboard-copy NPM</a></li>
        </ul>}>
      <h5 className="white-text">
        Let's get social!
      </h5>
      <Social />
    </Footer>
  );
};

export default CustomFooter;