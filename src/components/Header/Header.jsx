import React from "react";
import './Header.css';
import List from "../List/List";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#333" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              <Link to="/" className="logo">Ezy Pzy Recipe</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List />
    </div>
  );
}

export default Header;
