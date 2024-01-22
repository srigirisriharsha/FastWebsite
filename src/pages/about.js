import React from "react";
import { Container, Typography } from "@material-ui/core";
import image from "../images/navtechlogo.png";
import valuesBg from "../images/values_bg.png";
import { CarouselImages } from "./Carousel";

const About = () => {
  return (
    <div style={styles.container}>
      <Container style={styles.contentContainer}>
        <Typography align="center" style={styles.heading}>
          About Us
        </Typography>
        <div style={styles.imageWithText}>
          <img src={image} alt="Image" align="center" height={"350px"} />
          <div>
            <Typography style={styles.featureText}>
              Founded on principles of Inclusiveness, Innovation and
              Empowerment, Navtech Electronics is a team of dedicated, diverse
              Software developers, Software Engineers, System Engineers, and
              Hardware Engineers.
            </Typography>
            <Typography style={styles.featureText}>
              Founded in 2016, With global footprints in Detroit, MI, Atlanta,
              Georgia, and Hyderabad, India, NavTech is known for its
              groundbreaking products and services that redefine industries.
              From the groundbreaking cloud application, Inemo, tailored for the
              seafood industry, to iWMS, a Warehouse Management System Suite
              enhancing inventory visibility, NavTech's commitment to innovation
              shines through.
            </Typography>
            <Typography style={styles.featureText}>
              Our dedication extends to automotive services, encompassing
              everything from embedded software development and system
              engineering to verification and validation, electric mobility
              solutions, and expertise in autonomous driving.
            </Typography>
          </div>
        </div>
        <div style={styles.imageWithText}>
          <img
            src={valuesBg}
            alt="Image"
            align="center"
            height="500px"
            width="400px"
          />
          <div>
            <Typography style={styles.featureText}>
              <Typography style={styles.featureHeading}>
                <b>Our Values</b>
              </Typography>
              <br />
              To excellence drives us to innovate automotive automation
              solutions. We continuously strive to exceed expectations and
              deliver high-quality products. Collaboration is at the heart of
              our approach as we partner for collective success. We put our
              customers at the center of everything we do, offering tailored
              solutions to address their unique challenges. Our values of
              integrity, sustainability, and employee empowerment form the
              bedrock of our organization, guiding us in all our endeavors.
            </Typography>
            <Typography style={styles.featureText}>
              <Typography style={styles.featureHeading}>
                <b>Our Vision</b>
              </Typography>
              <br />
              To embrace technological innovations while safeguarding against
              unintended consequences. Nav Tech Electronics will be engineered
              by an ever-evolving, diverse workforce, equipped with increasingly
              capable tools, enabling us to innovate and respond effectively to
              competitive pressures. We aspire to stand unwaveringly as we face
              enormous engineering challenges, arising from the growing
              complexity and decreasing predictability brought about by the
              widespread application of Automotive Systems, Software
              Engineering, and Artificial Intelligence.
            </Typography>
            <Typography style={styles.featureText}>
              <Typography style={styles.featureHeading}>
                <b>Our Mission</b>
              </Typography>
              <br />
              To accelerate through the curves of progress, aligning with global
              trends in industry, the economy, and society. We strive to stay
              ahead, anticipating evolving system needs and expectations. Our
              commitment is to become smarter, self-organized, sustainable,
              resource-efficient, robust, and safe, all while maintaining the
              trust of our stakeholders. We aim to respond to a growing and
              diverse spectrum of societal needs, creating lasting value for
              all.
            </Typography>
          </div>
        </div>
      </Container>
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
    fontSize: "30px",
    color: "#0ca867",
  },
  carouselContainer: {
    // Add styles for the carousel container
    align: "center",
  },
  description: {
    fontSize: "20px",
    padding: "5px",
    textAlign: "center",
  },
  imageWithText: {
    display: "flex",
    flexDirection: "row",
    // marginTop: "20px",
    flex: 1,
    // backgroundColor: "red",
    padding: "20px",
  },
  image: {
    height: "350px",
    width: "50%",
  },
  featureText: {
    margin: "10px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
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
};

export default About;
