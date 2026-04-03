// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Divider } from '@mui/material';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.scss';

const quickLinks = ['About Temple', 'Darshan Timings', 'Events', 'Gallery', 'Donate', 'Volunteer'];
const services   = ['Daily Aarti', 'Annakshetra', 'Satsang Sabha', 'Bal Mandal', 'Mahila Mandal', 'Marriage Booking'];

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* Top Band */}
      <Box className="footer-top-band">
        <Typography className="footer-band-text">
          ॥ Jai Swaminarayan ॥ &nbsp;✦&nbsp; Vadtal Dham &nbsp;✦&nbsp; ॥ Jai Swaminarayan ॥
        </Typography>
      </Box>

      {/* Main Footer Grid */}
      <Box className="footer-main">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box className="footer-brand">
              <Link to="/" className="footer-logo">
                <TempleHinduIcon sx={{ fontSize: 32, color: '#C9A84C' }} />
                <Box>
                  <Typography className="footer-logo-name">Vadtal Dham</Typography>
                  <Typography className="footer-logo-tagline">Swaminarayan Temple</Typography>
                </Box>
              </Link>
              <Typography className="footer-brand-desc">
                A sacred sanctuary of peace and devotion, rooted in the eternal teachings of
                Bhagwan Swaminarayan. Serving devotees with love and dedication since over a century.
              </Typography>
              <Box className="social-row">
                {[
                  { icon: <FacebookIcon />, href: '#' },
                  { icon: <TwitterIcon />,  href: '#' },
                  { icon: <YouTubeIcon />,  href: '#' },
                  { icon: <InstagramIcon />,href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="social-btn">{s.icon}</a>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography className="footer-col-title">Quick Links</Typography>
            {quickLinks.map((l) => (
              <Link key={l} to="#" className="footer-link">{l}</Link>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography className="footer-col-title">Services</Typography>
            {services.map((s) => (
              <Link key={s} to="#" className="footer-link">{s}</Link>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography className="footer-col-title">Contact Us</Typography>
            <Box className="contact-item">
              <LocationOnIcon sx={{ fontSize: 16, color: '#C9A84C', flexShrink: 0, mt: '2px' }} />
              <Typography className="contact-text">
                Vadtal Dham Temple, Near Main Road,<br />
                Vadtal, Rajkot — Gujarat 360020
              </Typography>
            </Box>
            <Box className="contact-item">
              <PhoneIcon sx={{ fontSize: 16, color: '#C9A84C', flexShrink: 0 }} />
              <Typography className="contact-text">+91 99999 99999</Typography>
            </Box>
            <Box className="contact-item">
              <EmailIcon sx={{ fontSize: 16, color: '#C9A84C', flexShrink: 0 }} />
              <Typography className="contact-text">info@Vadtaldham.org</Typography>
            </Box>
            <Box className="darshan-mini">
              <Typography className="darshan-mini-title">Today's Aarti Times</Typography>
              {[
                ['Mangala Aarti', '6:00 AM'],
                ['Morning Darshan', '7:00 — 11:30 AM'],
                ['Sandhya Aarti', '7:00 PM'],
              ].map(([label, time]) => (
                <Box key={label} className="darshan-mini-row">
                  <span>{label}</span>
                  <span className="darshan-time">{time}</span>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Bar */}
      <Divider sx={{ borderColor: 'rgba(201,168,76,0.12)' }} />
      <Box className="footer-bottom">
        <Typography className="footer-copy">
          © 2025 Vadtal Dham Swaminarayan Temple — All Rights Reserved
        </Typography>
        <Typography className="footer-copy" sx={{ color: 'rgba(245,214,138,0.25) !important', mt: '4px' }}>
          Made with ♥ & Devotion &nbsp;·&nbsp; <span style={{ color: '#8B6914' }}>Jai Swaminarayan</span>
        </Typography>
      </Box>
    </footer>
  );
}