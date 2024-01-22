import { Link, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(10),
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
      marginLeft: theme.spacing(10),
      fontWeight: "bold",
      fontSize: "20px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "15px",
      //   marginLeft: theme.spacing(10),
      borderBottom: "1px solid transparent",
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
      fontWeight: "bold",
      flexDirection: "column",
    },
  }));
  const classes = useStyles();
  let text1 = "mailto:";
  let text2 = "info@navtechelectronics.com";
  let result = text1.concat(text2);
  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/" className={classes.link}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={classes.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="/version" className={classes.link}>
                Version
              </a>
            </li>
            <li>
              <a href="/docs" className={classes.link}>
                Docs
              </a>
            </li>
            <li>
              <a href="/contact" className={classes.link}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        

        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <Typography
              // style={styles}
              sx={{
                "&:hover": {
                  // backgroundColor: '#4363EA',
                  color: "blue",
                },
              }}
              button
              key="Email"
              component="a"
              href={result}
              color="white"
            >
              info@navtechelectronics.com
            </Typography>
          </p>
          {/* <p>Phone: +123 456 7890</p> */}
        </div>
        <div style={styles.section}>
          <h3>Others</h3>
          <a href="/" className={classes.link}>
            Policy
          </a>
          {/* <p>Phone: +123 456 7890</p> */}
        </div>
        <div style={styles.section}>
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com/navtechelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/navtech_electronics/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/navtechelectro"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/navtechelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@NavTechelectronics"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>
          &copy; 2021-2023 Nav Tech Electronics India Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  section: {
    flex: 1,
    margin: "0 20px",
  },
  bottomBar: {
    backgroundColor: "#222",
    padding: "10px 0",
    textAlign: "center",
  },
};

export default Footer;
