import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const QuoteTransition = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{
        height: "30vh",
        background: `rgba(165,214,167,${percentage.toPrecision(2)})`,
      }}>
      <Grid item>
        <blockquote ref={ref}>
          <Typography variant='body1'>
            The performance is the practice; the practice is the performance.
          </Typography>
          <cite>
            <Typography variant='body2'>- Joanna Kotze</Typography>
          </cite>
        </blockquote>
      </Grid>
    </Grid>
  );
};

export default QuoteTransition;
