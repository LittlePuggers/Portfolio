import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import anaibarra from "../images/anaibarra.jpg";

export default function Hero() {
  return (
    <React.Fragment>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "15vh 5vh 5vh 5vh",
            height: "60vh",
          }}
        >
          <div id="hero-text">
            <h1>Frontend Developer</h1>
            <h3>
              I like to craft solid and scalable frontend products with great
              user experiences.
            </h3>
          </div>
          <div id="hero-photo-container">
            <img id="hero-photo" src={anaibarra} alt="Ana Ibarra"></img>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
