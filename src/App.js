import "./App.css";
import "./index.css";
import { Footer } from "./components/Footer";
import HideAppBar from "./components/HideAppBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { teal } from "@mui/material/colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const myTheme = createTheme({
  palette: {
    primary: teal,
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <HideAppBar>
          <NavBar></NavBar>
        </HideAppBar>
        {/* <Router>
          <Routes>
            <Route
              path="/"
              element={<div style={{ height: "80vh" }}>Home</div>}
            ></Route>
          </Routes>
        </Router> */}
        <Hero></Hero>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
