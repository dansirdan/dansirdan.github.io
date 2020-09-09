import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  About,
  Footer,
  Header,
  Pitch,
  Projects,
  Quote,
  Skills,
} from "./dev_components";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Quote />
      <About />
      <Pitch />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default App;
