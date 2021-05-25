import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      margin: "60px 0 30px 0",
    },
    headerRow: {
      display: "flex",
      margin: "10px 0 5px 0",
    },
    headerRowTest: {
      textTransform: "uppercase",
      padding: "0 4px 0 0",
      color: theme.palette.secondary.dull,
    },
    headerRowBarHolder: {
      flexGrow: 5,
      padding: "0 0 5px 0",
    },
    headerRowBar: {
      display: "inline-block",
      width: "100%",
      borderBottom: `2px ${theme.palette.secondary.dull} solid`,
    },
  };
};

const SectionHeader = ({ classes, header, supportingText }) => {
  return (
    <div className={classes.root}>
      <div className={classes.headerRow}>
        <div className={classes.headerRowTest}>{header}</div>
        <div className={classes.headerRowBarHolder}>
          <div className={classes.headerRowBar}></div>
        </div>
      </div>
      <div>{supportingText}</div>
    </div>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(SectionHeader);
