import React from "react";
import { Container, withStyles, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = theme => ({});

const RepeatLayout = ({ classes, children }) => {
  console.log(children);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(RepeatLayout);
