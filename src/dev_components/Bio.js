import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const Bio = () => {
  return (
    <section id='biography'>
      <Grid container alignItems='center' justify='space-between'>
        <Grid item xs={12} md={4}>
          <Card style={{ borderRadius: "50%", maxWidth: 400, margin: "10px auto" }}>
            <CardMedia
              component='img'
              alt='photo of Daniel'
              image='images/profile2.jpg'
              title='Daniel Mont-Eton 2016'
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant='h2'>Full Stack Engineer</Typography>
          <hr />
          <Typography variant='body1'>
            I am deeply passionate about people and technology. My experience
            from the professional dance world has shaped me into a highly
            creative, collaborative, and adaptive Full Stack Developer. For the
            past year I have been sharpening my Full Stack skills by Teach
            Assisting and Substitute teaching a MERN-stack boot camp at the
            University of Washington. With a background in choreography,
            performance, visual art, and education I am a jack-of-all-trades
            with a tenacity for learning, collaborating, and drawing inspiration
            from the surrounding world. I believe in diversity and creating a
            world where everyone has a place at the table.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Bio;
