import React from "react";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Social from "../components/Social";

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

const Footer = () => {
  return (
    <Box width={"100%"} component='footer' marginTop={20} alignContent='center'>
      <Grid container direction='row' style={{ width: "100%" }}>
        <Grid item xs={12}>
          <Box width={"100%"} height={"100%"} bgcolor={green[100]} p={2}>
            <Grid container direction='row' alignItems="center" >
              <Grid item xs={12} md={8}>
                <Social />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='overline'>Built with:</Typography>
                <List dense={true}>
                  <ListItemLink href='https://reactjs.org/' target='_blank'>
                    <ListItemText primary='React.js' />
                  </ListItemLink>
                  <ListItemLink href='https://material-ui.com/' target='_blank'>
                    <ListItemText primary='Material-UI' />
                  </ListItemLink>
                  <ListItemLink
                    href='http://reactcommunity.org/react-transition-group/'
                    target='_blank'>
                    <ListItemText primary='React Transition Group' />
                  </ListItemLink>
                  <ListItemLink
                    href='https://www.npmjs.com/package/react-scroll-percentage'
                    target='_blank'>
                    <ListItemText primary='react-scroll-percentage NPM' />
                  </ListItemLink>
                  <ListItemLink
                    href='https://github.com/dansirdan/dansirdan.github.io'
                    target='_blank'>
                    <ListItemText primary='Check out the repository' />
                  </ListItemLink>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width={"100%"}
            height={50}
            bgcolor={green[200]}
            display='flex'
            justifyContent='center'
            p={1}>
            <Typography variant='overline' align='center'>
              &copy; 2020 Dan Mont-Eton
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
