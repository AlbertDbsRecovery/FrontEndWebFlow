// src/components/Navbar.js

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ role, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Link-urile pentru admin vs. user
  const adminLinks = [
    { to: '/admin/dashboard', text: 'Control Trafic' },
    { to: '/admin/routes', text: 'Rute' },
    { to: '/admin/partners', text: 'Parteneri' },
  ];

  const userLinks = [
    { to: '/user/routes', text: 'Rute' },
    { to: '/user/gamification', text: 'Recompense' },
    { to: '/user/notifications', text: 'Notificări' },
    { to: '/user/report', text: 'Raportează' },
    { to: '/user/settings', text: 'Setări' },
  ];

  const navItems = role === 'admin'
    ? adminLinks
    : role === 'user'
    ? userLinks
    : [];

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        UrbanFlow
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to}>
            <Link
              to={item.to}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
        {role && (
          <ListItem>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* ICON UL (Butonul hamburger) – acum e ascuns de la md în sus */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Titlu UrbanFlow – ascuns doar pe ecrane foarte mici */}
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            UrbanFlow
          </Typography>

          {/* Link-urile – vizibile doar de la md în sus (desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                color="inherit"
                key={item.to}
                component={Link}
                to={item.to}
                sx={{ textTransform: 'none' }}
              >
                {item.text}
              </Button>
            ))}
            {role && (
              <Button color="inherit" onClick={onLogout}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER – apare doar la ecrane sub md */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
