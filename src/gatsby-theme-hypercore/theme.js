import pink from "@material-ui/core/colors/pink";
import { createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#616161",
    },
    secondary: {
      main: pink[500],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".HypBranding-root": {
          color: "#fff",
          fontSize: 24,
          textDecoration: "none",
        },
        "[class*='Hero-content'] > .MuiTypography-root:first-child": {
          textShadow: `0 1px 4px #000`,
        },
        h1: {
          fontSize: "30px !important",
          fontWeight: "800 !important",
        },
        code: {
          background: "rgb(45, 42, 85)",
          color: "rgb(158, 254, 255)",
          padding: "0 4px",
          borderRadius: "4px",
          display: "inline-block",
        },
        ".MuiTypography-body1 + .MuiTypography-body1": {
          marginTop: "1rem",
        },
      },
    },
    MuiDivider: {
      root: {
        margin: "1rem 0",
      },
    },
  },
});

export default theme;
