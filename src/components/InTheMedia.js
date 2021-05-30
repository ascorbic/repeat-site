import React from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      margin: "20px 0",
    },
    header: {
      fontSize: 16,
      padding: "0 0 5px 0",
      fontWeight: 900,
      textTransform: "uppercase",
      borderBottom: `2px #000 solid`,
    },
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

let data = [{}];

const InTheMedia = ({ classes }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          headerImage: file(relativePath: { eq: "bg.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1184) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(data);
        return (
          <div className={classes.root}>
            <div className={classes.header}>In the Media</div>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <div className={classes.stat}>
                  <div className={classes.value}>
                    <Img fluid={data.headerImage.childImageSharp.fluid} alt="Alt attr" />
                  </div>
                  {/* <div className={classes.label}>{stat.label}</div>
                  <div className={classes.supportingText}>{stat.supportingText}</div> */}
                </div>
              </Grid>
            </Grid>
          </div>
        );
      }}
    />
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(InTheMedia);
