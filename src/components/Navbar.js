import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar({ onMenuClick }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Buton meniu pt. mobile */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UrbanFlow
        </Typography>

        {/* Link-uri simple */}
        <Button color="inherit" component={Link} to="/">
          Acasă
        </Button>
        <Button color="inherit" component={Link} to="/dashboard-admin">
          Admin
        </Button>
        <Button color="inherit" component={Link} to="/dashboard-user">
          Utilizator
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
