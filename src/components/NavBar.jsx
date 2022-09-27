import { useState, forwardRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { IoPaw } from "react-icons/io5";

const pages = [
  { name: "About me", id: "aboutme" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NavBar = forwardRef((props, ref) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.innerHTML === "About me" ||
        e.target.innerText === "ABOUT ME"
      ) {
        document.getElementById("aboutme").scrollIntoView();
      }
      if (
        e.target.innerHTML === "Projects" ||
        e.target.innerText === "PROJECTS"
      ) {
        document.getElementById("projects").scrollIntoView();
      }
      if (
        e.target.innerHTML === "Contact" ||
        e.target.innerText === "CONTACT"
      ) {
        document.getElementById("contact").scrollIntoView();
      }
    });
    return document.removeEventListener("click", (e) => {
      if (
        e.target.innerHTML === "About me" ||
        e.target.innerText === "ABOUT ME"
      ) {
        document.getElementById("aboutme").scrollIntoView();
      }
      if (
        e.target.innerHTML === "Projects" ||
        e.target.innerText === "PROJECTS"
      ) {
        document.getElementById("projects").scrollIntoView();
      }
      if (
        e.target.innerHTML === "Contact" ||
        e.target.innerText === "CONTACT"
      ) {
        document.getElementById("contact").scrollIntoView();
      }
    });
  }, []);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar ref={ref} color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <IoPaw sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANA IBARRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IoPaw sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANA IBARRA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default NavBar;
