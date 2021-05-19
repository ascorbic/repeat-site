import React from "react";
import { Container, withStyles, Grid, Box, Link } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = (theme) => {
  console.log(theme.typography);
  return {
    root: {
      backgroundColor: fade(theme.palette.secondary.dark, 0.8),
      position: "-webkit-sticky",
      position: "sticky",
      top: 0,
      zIndex: 5,
    },
    logo: {
      color: theme.palette.primary.bright,
      lineHeight: 0,
      fontSize: `20px !important `,
      fontWeight: `900 !important`,
      display: "inline-block",
      textDecoration: "none",
    },
    logoTitle: {
      paddingLeft: 10,
      color: theme.palette.primary.light,
    },
    ulHeaderNav: {
      margin: 0,
    },
    liHeaderNav: {
      marginLeft: 10,
      color: theme.palette.white,
      fontWeight: 500,
      display: "inline-block",
    },
    aHeaderNav: {
      marginLeft: 10,
      color: theme.palette.white,
      fontWeight: 500,
      display: "inline-block",
      textDecoration: "none",
    },
  };
};

const Header = ({ classes }) => {
  console.log(classes);
  return (
    <Box className={classes.root} pt={5} pb={2} boxShadow={0}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h1 className={classes.logo}>
              <Link className={classes.logo} href="/">
                REPEAT
              </Link>
            </h1>
            <span className={classes.logoTitle}>Rapid Energy Policy Evaluation and Analysis Toolkit</span>
          </Grid>
          <Grid item xs={6} align="right">
            <ul className={classes.ulHeaderNav}>
              <li className={classes.liHeaderNav}>
                <Link className={classes.aHeaderNav} href="/about">
                  About
                </Link>
              </li>
              <li className={classes.liHeaderNav}>
                <Link className={classes.aHeaderNav} href="/policies">
                  Policies
                </Link>
              </li>
              <li className={classes.liHeaderNav}>
                <Link className={classes.aHeaderNav} href="/media">
                  Media
                </Link>
              </li>
              <li className={classes.liHeaderNav}>
                <Link className={classes.aHeaderNav} href="/NZAP">
                  NZAP
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(Header);
