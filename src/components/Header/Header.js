// src/components/Header/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemText, useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import './Header.scss';
import { useState } from 'react';

const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Darshan', path: '/darshan' },
  { label: 'Events',  path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={`main-header ${trigger ? 'scrolled' : ''}`}
      >
        <Toolbar className="nav-toolbar">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="logo-icon-wrap">
              <TempleHinduIcon sx={{ fontSize: 32, color: '#C9A84C' }} />
            </div>
            <div className="logo-text">
              <span className="logo-name">Vadtal Dham</span>
              <span className="logo-tagline">Swaminarayan Temple</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <Box className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/donate"
              className="donate-btn"
              size="small"
            >
              Donate
            </Button>
          </Box>

          {/* Mobile Menu Toggle */}
          <IconButton
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: 'none' }, color: '#F5D68A' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ className: 'mobile-drawer' }}
      >
        <Box className="drawer-header">
          <span className="drawer-title">Menu</span>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#F5D68A' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List className="drawer-list">
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              className={`drawer-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/donate"
              fullWidth
              onClick={() => setDrawerOpen(false)}
            >
              🙏 Donate Now
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}