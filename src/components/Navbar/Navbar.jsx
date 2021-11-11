import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.png";
import "./navbar-styles.css";
const Navbar = ({ totalItems }) => {
  const { pathname } = useLocation();
  console.log("location", pathname);
  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ bgcolor: "primary.light" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="navbar-left">
            <a href="/">
              <img src={logo} alt="Oyuncak Shop" height="50px" />
            </a>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              color="inherit"
              sx={{
                display: { xs: "none", sm: "block" },
                px: 2,
                textDecoration: "none",
              }}
            >
              Oyuncak Shop
            </Typography>
          </div>
          <div className="navbar-right">
            <Typography
              variant="h5"
              color="inherit"
              sx={{ display: { xs: "none", sm: "block" }, px: 2 }}
            >
              +67 459 332 67
            </Typography>
            {pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
