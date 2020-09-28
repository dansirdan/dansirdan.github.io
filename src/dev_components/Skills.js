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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
      { name: "Angular", yearXP: 1, selfScore: 3 },
      { name: "ASP.NET", yearXP: 1, selfScore: 3 },
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

  const handleShowSkills = event => {
    setCurrentSkill(event.target.value);
    setShowSkills(true);
  };

  return (
    <Container maxWidth='lg' component='section' id='skills' p={6}>
      <Paper
        style={{
          padding: "2rem",
          backgroundColor: "#e8f5e9",
        }}>
        <Grid
          container
          direction='row'
          spacing={2}
          justify='center'
          alignItems='flex-end'
          p={4}>
          <Grid item xs={12}>
            <Typography variant='h2' component='h3'>
              Interactive Skills Chart
            </Typography>
            <hr></hr>
          </Grid>
          <Grid item container alignItems='center' spacing={2} direction='row'>
            <Grid item>
              <Typography variant='subtitle1' display='inline'>
                Current Skill:{" "}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControl m={3}>
                <InputLabel id='skill-select-label'>Select Skill</InputLabel>
                <Select
                  labelId='skill-select-label'
                  id='skill-select'
                  value={currentSkill}
                  onChange={handleShowSkills}>
                  <MenuItem value={0}>Languages</MenuItem>
                  <MenuItem value={1}>Frameworks</MenuItem>
                  <MenuItem value={2}>Database</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* <Grid item container alignItems='center' spacing={2} direction='row'> */}
            <Grid item xs={12}>
              <ColorButton
                variant='contained'
                color='primary'
                onClick={() => setYearXP(!yearXP)}>
                Change Scale to {yearXP ? "Score" : "Year"}
              </ColorButton>
            </Grid>
          {/* </Grid> */}
          <Grid
            container
            item
            xs={12}
            style={{ minHeight: "50vh" }}
            alignContent='center'>
            <Box
              width='100%'
              borderLeft={1}
              borderBottom={1}
              paddingTop={2}
              overflow='hidden'
              bgcolor='white'>
              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={currentSkill + "year=" + yearXP}
                  in={showSkills && yearXP}
                  timeout={500}
                  classNames='skills'>
                  <Box
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    alignSelf='flex-end'
                    overflow='hidden'>
                    {skillsets[currentSkill].skills.map((skill, i) => (
                      <Box
                        key={i}
                        display='flex'
                        justifyContent='flex-end'
                        alignItems='center'
                        width={
                          yearXP
                            ? `${5 + skill.yearXP * 20}%`
                            : `${5 + skill.selfScore * 10}%`
                        }
                        p={1}
                        my={2}
                        borderRadius={"0 25px 25px 0"}
                        bgcolor={green[100]}>
                        <Chip
                          label={skill.name}
                          size='small'
                          style={{ backgroundColor: green[300] }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CSSTransition>
              </SwitchTransition>
              <SwitchTransition mode='out-in'>
                <CSSTransition
                  key={yearXP}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames='xp'>
                  <Box display='flex' width='100%' alignSelf='flex-end'>
                    {yearXP
                      ? [1, 2, 3, 4, 5].map((year, index) => (
                          <Box
                            key={"year-measure-" + index}
                            width='20%'
                            borderRight={1}
                            height={25}
                            display='flex'
                            p={2}
                            justifyContent='flex-end'
                            alignItems='center'>
                            {year}
                          </Box>
                        ))
                      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year, index) => (
                          <Box
                            key={"selfXP-measure-" + index}
                            width='10%'
                            borderRight={1}
                            height={25}
                            display='flex'
                            p={2}
                            justifyContent='flex-end'
                            alignItems='center'>
                            {year}
                          </Box>
                        ))}
                  </Box>
                </CSSTransition>
              </SwitchTransition>
            </Box>
          </Grid>
          <Grid item>
              <Typography variant='subtitle1' display='inline'>
                Current Scale:{" "}
              </Typography>
              <Typography display='inline' variant='subtitle2'>
                {yearXP ? "Years of Experience" : "Self-eval Score (out of 10)"}
              </Typography>
            </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Skills;
