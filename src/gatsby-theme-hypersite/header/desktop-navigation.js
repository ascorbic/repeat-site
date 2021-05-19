import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
// import PropTypes from "prop-types";

const useStyles = makeStyles({
  navigationList: {
    display: "inline-block",
    padding: "0 0px 0 15px",
  },
  navLink: {
    color: "#FFF",
    textDecoration: "none",
  },
});

const DesktopNavigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ul>
        <li className={classes.navigationList}>
          <a className={classes.navLink} href="/">
            Home
          </a>
        </li>
        <li className={classes.navigationList}>
          <a
            className={classes.navLink}
            role="botton"
            aria-controls="simple-menu"
            aria-haspopup="true"
            href="/"
            onClick={handleClick}
          >
            Open Menu
          </a>

          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </li>
        <li className={classes.navigationList}>
          <a className={classes.navLink} href="/about">
            About
          </a>
        </li>
        <li className={classes.navigationList}>
          <a className={classes.navLink} href="/media">
            Media
          </a>
        </li>
      </ul>
    </div>
  );
};

// DesktopNavigation.propTypes = {};

export default DesktopNavigation;
