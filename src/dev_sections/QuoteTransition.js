import React from "react";
import Typography from "@material-ui/core/Typography";

const QuoteTransition = () => {
  return (
    <blockquote>
      <Typography variant='body1'>
        The performance is the practice; the practice is the performance.
      </Typography>
      <cite>
        <Typography variant='body2'>- Joanna Kotze</Typography>
      </cite>
    </blockquote>
  );
};

export default QuoteTransition;
