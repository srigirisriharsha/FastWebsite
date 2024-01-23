import React from "react";
import { Container, Typography } from "@material-ui/core";
import image from "../images/experiance seamless.png";
import laptopTest from "../images/automationImag.png";
import thinking from "../images/thinking.png";
import homegif from "../images/Pintire.gif";
import { CarouselImages } from "./Carousel";
import GifPlayer from "react-gif-player";
const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.Frameworkcontainer}>
        <div style={styles.textContainer}>
          <div >
            <div align="center" style={styles.Frameworkheading}>
              SYSTEM TEST FRAMEWORK
            </div>
            <br />
            <Typography style={styles.FrameworkheadingContent}>
              Allows consistent and effective automation of the entire test
              environment for a Embedded System.
            </Typography>
            <Typography style={styles.FrameworkheadingContent}>
              Supports and connects so many different test tools, that it easily
              fits in numerous existing test and validation processes.
            </Typography>{" "}
            <Typography style={styles.FrameworkheadingContent}>
              Test quality is kept exceptionally high at all levels, although
              the effort it takes to use it is extremely low.
            </Typography>
          </div>
        </div>
  
        <img src={laptopTest} alt="Image" style={styles.FrameworkImage} />
      </div>
      <Container style={styles.contentContainer}>
        {/* <div style={styles.carouselContainer}>
            <CarouselImages />
          </div>  */}

        <div style={styles.imageWithText}>
          <img src={image} alt="Image" style={styles.image} />
          <div style={styles.featureText}>
            <Typography style={styles.featureHeading}>
              <b>Key Features</b>
            </Typography>
            <br />
            <Typography>
              This application is an Integrated Environment for test case
              authoring, test script generation based on test bench
              configuration and test execution software for the validation of
              embedded systems in automotive environments.
            </Typography>

            <ul>
              <li>
                FAST improve effectiveness and efficiency of the test
                environment of the embedded system.
              </li>
              <li>
                Generates Test Sequence Based on test bench and test case.
              </li>
              <li>
                Overall time to author test cases is reduced by 30% and test
                Automation Readiness increased by 90%.
              </li>
              <li>
                Standardization Of all test artifacts (Test cases, Test
                sequence, Test results).
              </li>
              <li>
                Intuitive graphic user interface, Integrated with ALM tools for
                agile environment.
              </li>
              <li>
                Capable of remote triggering and monitoring of test cases and
                CICD practices.
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            padding: "50px",
            flexDirection: "row",
          }}
        >
          <Typography style={styles.featureHeading} align="center">
            <b>Key Interfaces and Stats</b>
          </Typography>
          <br />
          <Typography style={styles.text}>
            Due to the complexity of test cases written by different authors
            worldwide without adequate variables, testing an automobile ECU can
            be challenging. FAST serves as a one-stop solution for design
            realization, test case execution, and evaluation. It seamlessly
            integrates with CI/CD pipelines and other development tools.
            Multiple test tools and settings enable flexibility and
            compatibility. ALM integration enhances Agile team communication.
            Standardizing test artifacts ensures quality and reuse. Focused
            automation features accelerate testing and automate repetitive
            activities. FAST is easy to customize and integrate, making it a
            valuable tool for automating embedded system testing in the
            automotive industry.
          </Typography>
        </div>
        <div style={styles.imageWithText}>
          <img src={thinking} alt="Image" style={styles.image} />
          <div style={styles.featureText}>
            <Typography style={styles.featureHeading}>
              <b>Where we are involved further:</b>
            </Typography>
            <br />
            <Typography>
              Automated testing can help ensure that the system is tested
              thoroughly and consistently. A test framework like FAST makes it
              simple to create and run tests, generate test results, and manage
              test cases and data. The FAST framework is modular and may be used
              in tandem with your existing CI/CD workflow, development tools,
              and processes.
            </Typography>
          </div>
        </div>
      </Container>

      {/* <div style={styles.footer}>
        <Typography align="center" style={styles.footerText}>
          &copy; 2024 Your Company. All rights reserved.
        </Typography>
      </div> */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  contentContainer: {
    flex: 1,
    padding: "10px",
  },
  heading: {
    fontSize: "50px",
    color: "#0ca867",
  },
  Frameworkheading: {
    fontSize: "40px",
    color: "white",
    textAlign: "left",
    // fontWeight: "bold",
    fontFamily: "'Monaco, monospace'",
  },
  FrameworkheadingContent: {
    fontSize: "20px",
    color: "white",
    textAlign: "left",
    // fontWeight: "bold",
    // fontFamily: "Work Sans",
    marginTop: "20px",
  },
  boxStyle : {
    // border: '2px solid #000', // Specify the border style
    borderRadius: '10px', // Specify the border radius
    padding: '20px', // Add padding for the content inside the box
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Specify the background color with transparency
  },
  description: {
    fontSize: "20px",
    padding: "5px",
    textAlign: "center",
  },
  imageWithText: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
  image: {
    height: "480px",
    width: "50%",
    borderRadius: "10px",
    padding: "50px",
  },
  FrameworkImage: {
    // height: "350px",
    // width: "50%",
    borderRadius: "10px",
  },
  featureText: {
    padding: "50px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  featureHeading: {
    fontSize: "20px",
    color: "#0ca867",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  footerText: {
    fontSize: "16px",
  },
  Frameworkcontainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px",
    backgroundImage: `url(${homegif})`,
    // height: "550px",
  },
  carouselContainer: {
    flex: 2,
    // marginRight: "20px", // Adjust the margin as needed
  },
  textContainer: {
    flex: 1,
    // marginRight: "20px", // Adjust the margin as needed
  },
};

export default Home;
