import React from 'react';
import Title from '../Title/Title';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "#333"}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Recipe
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Title />
    </div>
  )
}

export default Header
