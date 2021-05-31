import React from "react";
import { withStyles, Grid, Container } from "@material-ui/core";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const styles = (theme) => {
  console.log(theme);
  return {
    root: {
      backgroundColor: theme.palette.primary.dull,
      margin: "20px 0",
      padding: "90px 0 35px 0",
    },
    header: {
      fontSize: 16,
      padding: "0 0 5px 0",
      fontWeight: 900,
      textTransform: "uppercase",
      borderBottom: `3px #000 solid`,
    },
    mediaRow: {
      padding: "20px 0 5px 0",
    },
    label: {
      padding: "10px 0",
      fontSize: 16,
      fontWeight: 900,
    },
  };
};

let data = [{}];

const InTheMedia = ({ classes }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          mediaVoxImage: file(relativePath: { eq: "bg.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mediaWashPoImage: file(relativePath: { eq: "hello.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mediaNytImage: file(relativePath: { eq: "guide-social.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(data);
        return (
          <Container maxWidth="xl" className={classes.root}>
            <Container width="lg">
              <div>
                <div className={classes.header}>In the Media</div>
                <Grid className={classes.mediaRow} container spacing={3}>
                  <Grid item md={4} xs={12}>
                    <div className={classes.stat}>
                      <div className={classes.value}>
                        <Img fluid={data.mediaVoxImage.childImageSharp.fluid} alt="Alt attr" />
                      </div>
                      <div className={classes.label}>
                        E-Commerce Mega-Warehouses, a Smog Source, Faces New Pollution Regulations
                      </div>
                    </div>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <div className={classes.stat}>
                      <div className={classes.value}>
                        <Img fluid={data.mediaWashPoImage.childImageSharp.fluid} alt="Alt attr" />
                      </div>
                      <div className={classes.label}>How Biden Could Deliver Climate Goals</div>
                    </div>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <div className={classes.stat}>
                      <div className={classes.value}>
                        <Img fluid={data.mediaNytImage.childImageSharp.fluid} alt="Alt attr" />
                      </div>
                      <div className={classes.label}>Tracking Biden’s Environmental Actions</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Container>
        );
      }}
    />
  );
};

// Hero.propTypes = {};

export default withStyles(styles)(InTheMedia);
