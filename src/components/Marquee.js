import React from "react";
import { Container, withStyles, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.dark,
      backgroundImage: "url(https://source.unsplash.com/1600x900/?hills,windmill)",
      backgroundSize: "cover",
    },
    content: {
      height: "75vh",
      maxWidth: "50%",
      paddingBottom: "60px",
    },
    h1: {
      margin: 0,
      padding: 0,
      fontSize: "50px !important",
      color: theme.palette.white,
      verticalAlign: "bottom",
      fontWeight: 900,
    },
    h2: {
      margin: 0,
      padding: "15px 0",
      color: theme.palette.white,
      verticalAlign: "bottom",
    },
  };
};

const Marquee = ({ classes, backgroundImage, headerText, subHeaderText }) => {
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Container width="lg">
        <Box className={classes.content} display="flex" flexWrap="wrap" alignContent="flex-end" pb={1} m={1}>
          <Box>
            <h1 className={classes.h1}>{headerText}</h1>
            <h2 className={classes.h2}>{subHeaderText}</h2>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(Marquee);
