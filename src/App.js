import React from 'react';
import { About, Main, Projects, Skills } from './sections/index';
import CustomFooter from './components/Footer';
import CustomFAB from './components/CustomFAB';
import BlockQuote from './components/BlockQuote';
// import './App.css';

const App = () => {

  return (
    <div>
      <Main />
      <BlockQuote />
      <About />
      <Skills />
      <Projects />
      <CustomFAB />
      <CustomFooter />
    </div>
  )
};

export default App;
