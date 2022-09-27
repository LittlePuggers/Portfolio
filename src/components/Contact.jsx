import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export default function Contact(ref) {
  return (
    <Box
      id="contact"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "primary",
        margin: "15vh 5vh 5vh 5vh",
        height: "80vh",
        "& > :not(style)": { m: 1, width: "50%" },
      }}
      noValidate
      autoComplete="off"
    >
      <h4>Send me a message!</h4>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <div className="contact-input">
        <TextField label="Your Name" variant="standard" />
        <TextField label="Your Email" variant="standard" />
      </div>
      <TextField label="Your Message" variant="standard" />
      <Button variant="outlined" id="contact-button">
        Shoot <EastOutlinedIcon />
      </Button>
    </Box>
  );
}
