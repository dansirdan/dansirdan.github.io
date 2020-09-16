import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Skills = () => {
  const frameworks = [
    "React.js",
    "Express.js (Node.js)",
    "AngularJS",
    "ASP.NET CORE",
  ];
  const languages = ["JavaScript", "HTML5", "CSS3"];
  const databases = ["SQL", "U-SQL", "NoSQL", "MongoDB"];

  return (
    <section>
      <Typography variant='h2'>Skills</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h3'>Languages</Typography>
              {languages.map((lang, key) => (
                <li key={key}>
                  <Chip label={lang} />
                </li>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h3'>Frameworks</Typography>

              {frameworks.map((framework, key) => (
                <li key={key}>
                  <Chip label={framework} />
                </li>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h3'>Databases</Typography>

              {databases.map((db, key) => (
                <li key={key}>
                  <Chip label={db} />
                </li>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Skills;
