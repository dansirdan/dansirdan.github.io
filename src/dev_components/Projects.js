import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CSSTransition } from "react-transition-group";
import Button from "@material-ui/core/Button";
import projects from "./projects.json";
import Box from "@material-ui/core/Box";
import green from "@material-ui/core/colors/green";

import "./style.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "10px auto",
  },
});

const Projects = () => {
  const classes = useStyles();

  const [showProject, setShowProject] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [currentProject, setCurrentProject] = useState({});

  return (
    <Container
      maxWidth='lg'
      component='section'
      id='projects'
      p={4}
      style={{ minHeight: "90vh" }}>
      <Paper style={{ minHeight: "90vh", padding: "2rem", backgroundColor:"#e8f5e9" }}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={2}
          p={4}>
          {showAll &&
            projects.projects.map((project, i) => (
              <Grid key={"project-key-" + i} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                    onClick={() => {
                      setCurrentProject(projects.projects[i]);
                      setShowProject(true);
                    }}>
                    <Box display={{ xs: 'none', sm: 'block' }}>
                      <CardMedia
                        component='img'
                        alt={project.modalImage.alt}
                        height='200'
                        image={project.modalImage.src}
                        title='Contemplative Reptile'
                      />
                    </Box>
                    <CardContent >
                      <Typography gutterBottom variant='h5' component='h6'>
                        {project.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          <CSSTransition
            in={showProject}
            timeout={300}
            classNames='project'
            unmountOnExit
            onEnter={() => setShowAll(false)}
            onExited={() => setShowAll(true)}>
            <div>
              <Button onClick={() => setShowProject(false)}>Close</Button>
              <Typography variant='h1'>{currentProject.title}</Typography>
            </div>
          </CSSTransition>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Projects;
