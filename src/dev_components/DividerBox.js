import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useScrollPercentage } from "react-scroll-percentage";

const DividerBox = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  return (
    <Box
      bgcolor='#a5d6a7'
      width={"100%"}
      height={200}
      display='flex'
      alignItems='center'
      whiteSpace='nowrap'
      overflow='hidden'
      justifyContent='center'>
      <Typography variant='h2' component='h3' ref={ref}>
        <Box
          textAlign='center'
          display='block'
          whiteSpace='nowrap'
          overflow='hidden'
          letterSpacing={35 - percentage.toPrecision(2) * 35}>
          Projects / Skills
        </Box>
      </Typography>
    </Box>
  );
};

export default DividerBox;
