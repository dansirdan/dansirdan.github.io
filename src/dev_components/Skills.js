import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Skills = () => {
  const skillsets = [
    { name: "Languages", skills: ["JavaScript", "HTML5", "CSS3", "C#"] },
      {
        name: "Frameworks",
        skills: [
          "React.js",
          "Node.js",
          "Express.js",
          "AngularJS",
          "ASP.NET CORE",
        ],
      },
    { name: "Databases", skills: ["SQL", "U-SQL", "NoSQL", "MongoDB"] },
  ];

  return (
    <section id="skills">
      <Typography variant='h2' component="h3">Skills</Typography>
      <Grid container spacing={2}>
        {skillsets.map((set, key1) => {
          return (
            <Grid key={key1} item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant='h4'>{set.name}</Typography>
                  {set.skills.map((lang, key2) => (
                    <li key={key2}>
                      <Chip label={lang} />
                    </li>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default Skills;
