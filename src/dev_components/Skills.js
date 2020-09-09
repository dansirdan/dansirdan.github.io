import React from 'react';
import Typography from '@material-ui/core/Typography';

const Skills = () => {

    const frameworks = ["React.js", "Express.js (Node.js)", "AngularJS", "ASP.NET CORE"];
    const languages = ["JavaScript", "HTML5", "CSS3"];
    const databases = ["SQL", "U-SQL", "NoSQL", "MongoDB"];

    return (
        <section>
            <Typography variant='h2'>Skills</Typography>
            <Typography variant='h3'>Languages</Typography>
            <Typography variant='h3'>Frameworks</Typography>
        </section>
    )
}

export default Skills;