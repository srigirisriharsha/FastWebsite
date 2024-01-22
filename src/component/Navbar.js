import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import fast_logo from "../images/fast_logo.png";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "30px",
    color: "#551a8b",
    fontFamily: "'Work Sans', sans-serif",
  },
  link: {
    textDecoration: "none",
    // color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(10),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "#551a8b",
      borderBottom: "1px solid white",
      fontWeight:"bold"
      // backgroundColor:"#551a8b",
      // width:"40px"
    },
    fontWeight: "bold",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <CssBaseline />
      <Toolbar>
    
        <Typography
          // variant="h6"
          className={classes.logo}
          style={{ fontFamily: "'Work Sans', sans-serif", }}
        >
          {/* FAST */}
          <img
          src={fast_logo}
          height="60px"
          width="300px"
          loading="lazy"
          style={{ marginTop: "10px" }}
        />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Home
              </p>
            </Link>
            <Link to="/about" className={classes.link}>
            <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              > About Us</p> 
            </Link>
            <Link to="/version" className={classes.link}>
            <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >   Version</p> 
            </Link>
            <Link to="/docs" className={classes.link}>
            <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              > Docs</p> 
            </Link>
            <Link to="/contact" className={classes.link}>
            <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              > Contact Us</p> 
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export function useAppBarHeight() {
  const {
    mixins: { toolbar },
    breakpoints,
  } = useTheme();

  const queryDesktop = breakpoints.up("sm");
  const queryLandscape = `${breakpoints.up("xs")} and (orientation: landscape)`;

  const isDesktop = useMediaQuery(queryDesktop);
  const isLandscape = useMediaQuery(queryLandscape);

  const cssToolbar =
    toolbar[isDesktop ? queryDesktop : isLandscape ? queryLandscape : ""];

  return cssToolbar?.minHeight ? cssToolbar.minHeight : 0;
}

export default Navbar;
