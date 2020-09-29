import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CSSTransition } from "react-transition-group";
import Button from "@material-ui/core/Button";
import projects from "./projects.json";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import green from "@material-ui/core/colors/green";
import Chip from "@material-ui/core/Chip";
import "./style.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "10px auto",
  },
});

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

const Projects = () => {
  const classes = useStyles();

  const [showProject, setShowProject] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [currentProject, setCurrentProject] = useState(projects.projects[0]);

  return (
    <Container
      maxWidth='lg'
      component='section'
      id='projects'
      p={4}
      style={{ minHeight: "90vh" }}>
      <Paper
        style={{
          minHeight: "90vh",
          padding: "2rem",
          backgroundColor: "#e8f5e9",
        }}>
        {showAll && (
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            spacing={2}
            p={4}>
            {projects.projects.map((project, i) => (
              <Grid key={"project-key-" + i} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                    onClick={() => {
                      setCurrentProject(projects.projects[i]);
                      setShowProject(true);
                    }}>
                    <Box display={{ xs: "none", sm: "block" }}>
                      <CardMedia
                        component='img'
                        alt={project.modalImage.alt}
                        height='200'
                        image={project.modalImage.src}
                        title='Contemplative Reptile'
                      />
                    </Box>
                    <CardContent>
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
          </Grid>
        )}
        <CSSTransition
          in={showProject}
          timeout={300}
          classNames='project'
          unmountOnExit
          onEnter={() => setShowAll(false)}
          onExited={() => setShowAll(true)}>
          <Box bgcolor='white' p={4}>
            <Grid
              container
              style={{ minHeight: "80vh" }}
              direction='column'
              justify='space-between'
              spacing={1}
              alignItems='center'>
              <Grid
                item
                container
                direction='row'
                justify='center'
                alignContent='center'>
                <Grid item>
                  <Typography variant='h2' component='h4' align='center'>
                    {currentProject.title}
                  </Typography>
                  <hr></hr>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='subtitle1' align='center'>
                    {currentProject.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item direction='row' justify='center' spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card
                    style={{
                      maxWidth: 400,
                      margin: "auto",
                    }}>
                    <CardMedia
                      component='img'
                      alt={currentProject.modalImage.alt}
                      image={currentProject.modalImage.src}
                      title={currentProject.modalImage.alt}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box bgcolor={green[50]}>
                    <List
                      component='nav'
                      aria-label='secondary mailbox folders'>
                      <ListItemLink
                        href={currentProject.appLink}
                        target='_blank'>
                        <ListItemText primary='Deployed App' />
                      </ListItemLink>
                      <ListItemLink
                        href={currentProject.repoLink}
                        target='_blank'>
                        <ListItemText primary='Repository' />
                      </ListItemLink>
                    </List>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <hr></hr>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body1' align='center'>
                    {currentProject.userStory}
                  </Typography>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  {currentProject.tech.map((techItem, i) => (
                    <Grid item key={"tech-chip-" + i}>
                      <Chip
                        label={techItem}
                        style={{ backgroundColor: green[200] }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid container item justify='flex-end' alignContent='center'>
                <Button
                  variant='outlined'
                  onClick={() => setShowProject(false)}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CSSTransition>
      </Paper>
    </Container>
  );
};

export default Projects;
