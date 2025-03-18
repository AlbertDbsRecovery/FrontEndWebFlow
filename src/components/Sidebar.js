import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function Sidebar({ drawerWidth, mobileOpen, onDrawerToggle }) {
  const drawerContent = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard-admin">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Admin Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard-user">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Drawer permanent pe ecrane mari */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;
