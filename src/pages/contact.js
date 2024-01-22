import { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import contactus from "../images/contactus.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div style={styles.container}>
      <Container style={styles.contentContainer}>
        <Typography align="center" style={styles.heading}>
          Contact Us
        </Typography>
        <div style={styles.imageWithText}>
          <img src={contactus} alt="Image" align="center" height={"400px"} />
          <div style={{ marginLeft: "100px" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
                size="small"
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
                size="small"

              />
              <TextField
                fullWidth
                label="Phone Number"
                value={phNo}
                onChange={(e) => setPhNo(e.target.value)}
                margin="normal"
                required
                type="tel"
                size="small"

              />
              <TextField
                fullWidth
                label="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
                size="small"

              />
              <Button variant="contained" type="submit" sx={{ mt: 2 }} style={{backgroundColor:"#0ca867"}}>
                Submit
              </Button>
            </form>
          </div>
        </div>
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
