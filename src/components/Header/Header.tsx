import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faHouse,
  faStore,
  faEnvelope,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const pages = ["Home", "Marketplace", "Contact", "APIS"];
const pagesLogos: IconDefinition[] = [faHouse, faStore, faEnvelope, faGear];
const pagesRoutes = ["/home", "/marketplace", "/contact", "/api"];

//header components
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        my: "55px",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#7f5a83",
          background: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 400,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenMarketHub
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
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Button
                        key={page}
                        href={pagesRoutes[index]}
                        onClick={handleCloseNavMenu}
                        sx={{
                          color: "inherit",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {page}
                      </Button>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 500,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OpenMarketHub
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page}
                  href={pagesRoutes[index]}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    mx: 2,
                  }}
                >
                  <FontAwesomeIcon icon={pagesLogos[index]} size="xl" />
                  <Box sx={{ mx: 1 }}>{page}</Box>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
