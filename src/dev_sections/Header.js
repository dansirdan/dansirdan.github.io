import React from "react";
import Typography from "@material-ui/core/Typography";
import { useScrollPercentage } from "react-scroll-percentage";
import Box from "@material-ui/core/Box";
import green from '@material-ui/core/colors/green';

const Header = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  const percentArr = [76, 92, 140, 118, 110, 64, 120, 77, 50, 63, 40, 82, 95, 130, 79, 40, 100, 73, 62, 39];
  const colorArr =[200, 400, 100, 50, 300, 100, 200, 400, 200, 500, 400, 200,400, 100, 50, 200, 50, 300, 600, 400 ];

  return (
    <header style={{ height: "100vh", position: "relative", overflow: 'hidden' }}>
      <Typography
        variant='h2'
        component='h1'
        style={{
          zIndex: 10,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <Box
          textAlign='center'
          display='block'
          whiteSpace='nowrap'
          overflow="hidden"
          letterSpacing={percentage.toPrecision(2) * 35}>
          Daniel Mont-Eton
        </Box>
      </Typography>
      <div
        style={{
          zIndex: 5,
          height: "100vh",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Box height='100%' width='100%' overflow="hidden">
          {percentArr.map((box, i) => (
            <Box
              key={i}
              display="inline-block"
              width={1/20}
              borderRadius={`${percentage.toPrecision(2) * 30}%`}
              height={`${box/5 + percentage.toPrecision(2) * box}%`}
              bgcolor={green[colorArr[i]]}>
              <br />
            </Box>
          ))}
        </Box>
      </div>
      <div style={{ position: "absolute", bottom: 0 }} ref={ref}></div>
    </header>
  );
};

export default Header;
