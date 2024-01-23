import { useState } from "react";
import { TextField, Button, Typography, Dialog } from "@mui/material";
import contactus from "../images/contactus.png";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function RequestForDemo({open,handleClose}) {
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
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Request Demo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Reach us anytime at{" "}
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
              style={{ color: "green" }}
            >
              info@navtechelectronics.com
            </Typography>
          </DialogContentText>
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
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
              style={{ backgroundColor: "#0ca867" }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Request</Button>
        </DialogActions>
      </Dialog>
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
