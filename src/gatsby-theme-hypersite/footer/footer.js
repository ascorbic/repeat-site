import React from "react";
import { Footer as BaseFooter } from "@hyperobjekt/material-ui-website";
import { useSiteMetadata } from "gatsby-theme-hypercore";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, withStyles, Grid, Link } from "@material-ui/core";

const styles = (theme) => {
  return {
    root: {
      padding: "40px 0 100px 0",
    },
    navigationRow: {
      borderTop: `3px ${theme.palette.primary.bright} solid`,
    },
    branding: {},
    navigation: {
      textAlign: "right",
    },
    ulHeaderNav: {
      margin: 0,
    },
    liHeaderNav: {
      marginLeft: 10,
      color: theme.palette.black,
      fontWeight: 900,
      display: "inline-block",
    },
    aHeaderNav: {
      marginLeft: 10,
      color: theme.palette.black,
      fontWeight: 900,
      display: "inline-block",
      textDecoration: "none",
    },
  };
};

const Footer = ({ classes }) => {
  // const siteMetadata = useSiteMetadata();
  return (
    <StaticQuery
      query={graphql`
        {
          princetonLogo: file(relativePath: { eq: "princetopn-logo.png" }) {
            childImageSharp {
              fixed(width: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <BaseFooter className={classes.root}>
            <Container width="lg">
              <Grid className={classes.navigationRow} container spacing={3}>
                <Grid className={classes.branding} item md={6} xs={12}>
                  <Img fixed={data.princetonLogo.childImageSharp.fixed} alt="Alt attr" />
                </Grid>
                <Grid className={classes.navigation} item md={6} xs={12}>
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
          </BaseFooter>
        );
      }}
    ></StaticQuery>
  );
};

export default withStyles(styles)(Footer);
