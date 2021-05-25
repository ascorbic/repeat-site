import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      marginTop: "30px",
    },
  };
};

const ArticleGraphic = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={11}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(ArticleGraphic);
