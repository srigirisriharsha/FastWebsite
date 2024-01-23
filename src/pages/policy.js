import { Container, Typography } from "@material-ui/core";

function policy() {
  return (
    <div style={styles.container}>
      <Container style={styles.contentContainer}>
        <Typography align="center" style={styles.heading}>
          Policy
        </Typography>
      </Container>
    </div>
  );
}

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
export default policy;
