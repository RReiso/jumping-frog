import React from "react";
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
const Navbar = () => {
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
            <img src={logo} alt="Oyuncak Shop" height="50px" />
            <Typography
              variant="h5"
              color="inherit"
              sx={{ display: { xs: "none", sm: "block" }, px: 2 }}
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
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
