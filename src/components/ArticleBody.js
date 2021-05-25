import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      margin: "30px 0",
    },
    grid: { backgroundColor: theme.palette.primary.main },
  };
};

const ArticleBody = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(ArticleBody);
