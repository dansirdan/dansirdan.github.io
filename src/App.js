import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { About, Footer, Header, QuoteTransition } from "./dev_sections";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <QuoteTransition />
        <About />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
