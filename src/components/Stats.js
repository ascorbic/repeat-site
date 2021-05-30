import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      margin: "20px 0",
    },
    header: {},
    stat: {},
    value: {
      fontSize: 42,
      fontWeight: 500,
      color: theme.palette.primary.main,
    },
    label: {
      fontSize: 12,
      fontWeight: 900,
    },
    supportingText: {
      fontSize: 14,
      display: "inline-block",
      width: "100%",
    },
  };
};

// {
//   header:'HI',
//   background:'',
//   stats:[{
//       value: '',
//       label: '',
//       supportingText: ''
//   }]
// }

const Stats = ({ classes, data }) => {
  return (
    <div className={classes.root}>
      <h1 className={classes.header}>{data.header}</h1>
      <Grid container spacing={3}>
        {data.stats.map((stat, i) => (
          <Grid key={i} item md={4} xs={12}>
            <div className={classes.stat}>
              <div className={classes.value}>{stat.value}</div>
              <div className={classes.label}>{stat.label}</div>
              <div className={classes.supportingText}>{stat.supportingText}</div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(Stats);
