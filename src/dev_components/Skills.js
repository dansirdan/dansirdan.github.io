import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Paper from "@material-ui/core/Paper";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
    "&:hover": {
      backgroundColor: green[500],
    },
  },
}))(Button);

const skillsets = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", yearXP: 2, selfScore: 8 },
      { name: "HTML5", yearXP: 2, selfScore: 8 },
      { name: "CSS3", yearXP: 2, selfScore: 7 },
      { name: "C#", yearXP: 1, selfScore: 4 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React.js", yearXP: 2, selfScore: 8 },
      { name: "Node.js", yearXP: 2, selfScore: 8 },
      { name: "Express.js", yearXP: 2, selfScore: 8 },
      { name: "AngularJS", yearXP: 1, selfScore: 3 },
      { name: "ASP.NET CORE", yearXP: 1, selfScore: 3 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", yearXP: 2, selfScore: 8 },
      { name: "U-SQL", yearXP: 1, selfScore: 5 },
      { name: "MongoDB", yearXP: 2, selfScore: 8 },
    ],
  },
];

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const [yearXP, setYearXP] = useState(true);

  const handleShowSkills = index => {
    setCurrentSkill(index);
    setShowSkills(true);
  };

  return (
    <Container maxWidth='lg' component='section' id='skills' p={6}>
      <Paper
        style={{
          minHeight: "60vh",
          padding: "2rem",
          backgroundColor: "#e8f5e9",
        }}>
        <Grid
          container
          direction='row'
          spacing={2}
          justify='center'
          alignItems='center'
          p={4}>
          <Grid item>
            <ColorButton
              variant='contained'
              color='primary'
              onClick={() => handleShowSkills(0)}>
              Languages
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant='contained'
              color='primary'
              onClick={() => handleShowSkills(1)}>
              Frameworks
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant='contained'
              color='primary'
              onClick={() => handleShowSkills(2)}>
              Database
            </ColorButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{skillsets[currentSkill].name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                key={currentSkill && yearXP}
                in={showSkills}
                timeout={500}
                classNames='skills'>
                <Box width='100%'>
                  {skillsets[currentSkill].skills.map((skill, i) => (
                    <Box
                      key={i}
                      display='flex'
                      justifyContent='flex-end'
                      alignItems='center'
                      width={yearXP ? `${skill.yearXP *20}%` : `${skill.selfScore *10}%`}
                      p={1}
                      my={2}
                      borderRadius={"0 25px 25px 0"}
                      // height={1 / skillsets[currentSkill].skills.length}
                      bgcolor={green[100]}>
                      <Chip
                        label={skill.name}
                        style={{ backgroundColor: green[300] }}
                      />
                    </Box>
                  ))}
                </Box>
              </CSSTransition>
            </SwitchTransition>
          </Grid>
          <Grid item >
          <ColorButton
              variant='contained'
              color='primary'
              onClick={() => {setYearXP(!yearXP) }}>
              {yearXP ? "Self Evaluation Score" : "Years of Experience"}
            </ColorButton>
          </Grid>
          {/* 

        {skillsets.map((set, key1) => {
          return (
            <Grid key={key1} container direction='column' item xs={12} spacing={2} p={4}>
              <Grid item xs={12}>
                <Typography variant='h6'><u>{set.name}</u></Typography>
              </Grid>
              <Grid container direction='row' item spacing={2}>
                {set.skills.map((lang, key2) => (
                  <Grid item key={key2}>
                    <Chip label={lang} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          );
        })} */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Skills;
