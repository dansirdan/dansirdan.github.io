import React from "react";
import Typography from "@material-ui/core/Typography";
import { Parallax, Background } from "react-parallax";

const insideStyles = {
  padding: 20,
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Header = () => {
  return (
    <header>
      <Parallax
        strength={400}
        renderLayer={percentage => (
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              borderRadius: "50%",
              width: percentage * 1000,
              height: percentage * 1000,
            }}
          />
        )}>
        <div style={{ height: "100vh" }}>
          <div style={insideStyles}>
            <Typography variant='h2' component='h1'>Daniel Mont-Eton</Typography>
          </div>
        </div>
        <Background>
          <div style={{ height: "100vh" }} />
        </Background>
      </Parallax>
    </header>
  );
};

export default Header;
