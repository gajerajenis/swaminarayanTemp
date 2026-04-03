// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Typography, Grid, Card, CardContent, Button, Chip
} from '@mui/material';
import {
  ArrowRight, Clock, Flower2, BookOpen, Utensils, Star,
  GraduationCap, Heart, ChevronRight, Bell, Mail,
  MapPin, Phone, Calendar
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import Header from '../components/Header/Header';
import './Home.scss';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img5.jpg'
import img3 from '../Images/img6.jpg'
import img4 from '../Images/img7.jpg'

// ── Marquee ──────────────────────────────────────────────────────
function Marquee() {
  const items = [
    'Jai Swaminarayan', 'Daily Mangala Aarti at 6:00 AM',
    'Swaminarayan Jayanti — Coming Soon', 'Free Annakshetra Prasad Daily',
    'Satsang Sabha Every Sunday 4 PM', 'Akhand Ramayan — Register Now',
  ];
  return (
    <Box className="marquee-wrap">
      <Box className="marquee-badge">
        <Bell size={13} />
        <span>Live</span>
      </Box>
      <Box className="marquee-track-wrap">
        <Box className="marquee-inner">
          {[...items, ...items].map((t, i) => (
            <Box key={i} className="marquee-item">
              <span className="marquee-dot">✦</span> {t}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ── Section Header component ─────────────────────────────────────
function SectionHeader({ tag, title, desc, light = false, center = false }) {
  return (
    <Box className={`sec-header ${center ? 'sec-header--center' : ''} ${light ? 'sec-header--light' : ''} fade-up`}>
      <Box className="sec-tag">
        <span className="sec-tag-line" />
        {tag}
        <span className="sec-tag-line" />
      </Box>
      <Typography variant="h2" className="sec-title">{title}</Typography>
      <Box className="gold-divider" />
      {desc && <Typography className="sec-desc">{desc}</Typography>}
    </Box>
  );
}

// ── Stat Chip component ───────────────────────────────────────────
function StatPill({ num, label }) {
  return (
    <Box className="stat-pill fade-up">
      <Typography className="stat-pill-num">{num}</Typography>
      <Typography className="stat-pill-label">{label}</Typography>
    </Box>
  );
}

// ── About ────────────────────────────────────────────────────────
function About() {
  return (
    <Box component="section" className="about-section" id="about">
      <Box className="section-wrapper">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="about-visual fade-up">
              {/* Decorative frame */}
              <Box className="about-frame-outer" />
              <Box className="about-frame-inner" />
              <Box className="about-img-block">
                <svg viewBox="0 0 360 280" width="100%" fill="none">
                  {/* Main shikhara */}
                  <polygon points="180,18 200,82 160,82" fill="rgba(245,214,138,0.7)" />
                  <rect x="155" y="82" width="50" height="50" rx="2" fill="rgba(245,214,138,0.5)" />
                  {/* Side shikharas */}
                  <polygon points="100,52 116,104 84,104" fill="rgba(245,214,138,0.5)" />
                  <rect x="80" y="104" width="36" height="32" fill="rgba(245,214,138,0.35)" />
                  <polygon points="260,52 276,104 244,104" fill="rgba(245,214,138,0.5)" />
                  <rect x="240" y="104" width="36" height="32" fill="rgba(245,214,138,0.35)" />
                  {/* Body */}
                  <rect x="60" y="136" width="240" height="90" rx="2" fill="rgba(245,214,138,0.28)" />
                  {/* Pillars */}
                  {[90, 130, 200, 240].map((x, i) => (
                    <rect key={i} x={x} y="136" width="10" height="90" fill="rgba(0,0,0,0.1)" />
                  ))}
                  {/* Doors */}
                  <rect x="155" y="170" width="50" height="56" rx="25" fill="rgba(245,214,138,0.5)" />
                  {/* Base */}
                  <rect x="44" y="226" width="272" height="14" rx="2" fill="rgba(245,214,138,0.45)" />
                  {/* Kalash */}
                  <ellipse cx="180" cy="18" rx="8" ry="8" fill="rgba(245,214,138,0.95)" />
                  <ellipse cx="180" cy="18" rx="3" ry="3" fill="#C9A84C" />
                </svg>
              </Box>
              <Box className="about-badge fade-up">
                <Typography className="badge-num">108+</Typography>
                <Typography className="badge-label">Years of Devotion</Typography>
              </Box>
              {/* Floating Om */}
              <Box className="about-om">ॐ</Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="fade-up">
              <SectionHeader
                tag="About the Temple"
                title={`A Sacred Abode of\nLord Swaminarayan`}
                desc="Vadtal Dham stands as a beacon of divine light, rooted in the teachings of Bhagwan Swaminarayan. More than a place of worship — it is a living spiritual community where devotion, service, and dharma unite."
              />
              <Typography className="sec-desc" sx={{ mt: -1, mb: 3 }}>
                Built with intricate traditional Gujarati architecture, the temple complex encompasses mandirs,
                an annakshetra, garden, and a vibrant satsang hall where the eternal flame of faith burns bright.
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {[
                  { num: '50K+', label: 'Devotees Monthly' },
                  { num: '365', label: 'Days Open' },
                  { num: '6', label: 'Daily Aarties' },
                ].map(({ num, label }) => (
                  <Grid item xs={4} key={label}>
                    <StatPill num={num} label={label} />
                  </Grid>
                ))}
              </Grid>
              <Button
                component={Link} to="/about"
                variant="contained" color="primary"
                className="cta-btn"
                endIcon={<ArrowRight size={16} />}
              >
                Explore Our Story
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// ── Darshan Cards ─────────────────────────────────────────────────
const darshan_cards = [
  {
    Icon: Flower2,
    title: 'Mangala Aarti & Darshan',
    desc: 'Begin your day in divine bliss with the sacred Mangala Aarti followed by the beautiful darshan of deities adorned in magnificent shringar.',
    badge: 'Daily',
    accent: '#C9A84C',
    bg: 'linear-gradient(145deg,#3D1500 0%,#7A3500 100%)',
  },
  {
    Icon: BookOpen,
    title: 'Satsang & Katha Sabha',
    desc: 'Immerse yourself in divine discourse. Weekly katha sessions illuminate the path of dharma through the sacred scriptures.',
    badge: null,
    accent: '#8B6ED4',
    bg: 'linear-gradient(145deg,#1A1A3D 0%,#2E2E7A 100%)',
  },
  {
    Icon: Utensils,
    title: 'Annakshetra Prasad Seva',
    desc: 'Our annakshetra serves thousands of devotees with pure sattvic meals every day — prasad prepared with love and devotion.',
    badge: 'Free',
    accent: '#5DBF8A',
    bg: 'linear-gradient(145deg,#0A2A1A 0%,#1A6B3D 100%)',
  },
  {
    Icon: Star,
    title: 'Parva & Festival Celebrations',
    desc: 'Join thousands of devotees in celebrating sacred festivals with grand decorations, cultural programmes, and joyous community spirit.',
    badge: 'Upcoming',
    accent: '#E8A84C',
    bg: 'linear-gradient(145deg,#3D1A00 0%,#6B3D00 100%)',
  },
  {
    Icon: GraduationCap,
    title: 'Bal Mandal & Education',
    desc: 'Nurture the next generation through Bal Mandal programs, teaching children the values of devotion, dharma, and our rich heritage.',
    badge: null,
    accent: '#BA84D4',
    bg: 'linear-gradient(145deg,#1A0A2A 0%,#4C1A7A 100%)',
  },
  {
    Icon: Heart,
    title: 'Volunteer Seva Opportunities',
    desc: 'Offer your time and talents in the service of the Lord. Join our dedicated sevaks and experience the joy of selfless service.',
    badge: 'Join Us',
    accent: '#E87070',
    bg: 'linear-gradient(145deg,#2A1A0A 0%,#7A4A1A 100%)',
  },
];

function DarshanCards() {
  return (
    <Box component="section" className="cards-section" id="darshan">
      {/* Decorative mandala bg */}
      <Box className="cards-mandala" />
      <Box className="section-wrapper">
        <SectionHeader
          tag="Our Services"
          title={`Divine Darshan\n& Seva`}
          desc="Explore the sacred services, programmes, and spiritual opportunities that bring devotees closer to Lord Swaminarayan."
          light center
        />
        <Grid container spacing={2.5} sx={{ mt: 4 }}>
          {darshan_cards.map((card, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box className="seva-card fade-up" style={{ '--delay': `${i * 80}ms`, '--accent': card.accent }}>
                {/* Top gradient image area */}
                <Box className="seva-card-top" sx={{ background: card.bg }}>
                  <Box className="seva-card-pattern" />
                  <Box className="seva-card-iconbig">
                    <card.Icon size={52} strokeWidth={1} color="rgba(255,255,255,0.15)" />
                  </Box>
                  {card.badge && (
                    <Box className="seva-badge">{card.badge}</Box>
                  )}
                  {/* Accent bottom border glow */}
                  <Box className="seva-card-glow" />
                </Box>

                {/* Card content */}
                <Box className="seva-card-body">
                  <Box className="seva-icon-wrap">
                    <card.Icon size={18} color={card.accent} strokeWidth={2} />
                  </Box>
                  <Typography className="seva-title">{card.title}</Typography>
                  <Typography className="seva-desc">{card.desc}</Typography>
                  <Box className="seva-link">
                    Learn More <ChevronRight size={14} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// ── Events ───────────────────────────────────────────────────────
const events = [
  { day: '15', month: 'Apr', title: 'Ram Navami Mahotsav', desc: 'Grand celebration with kirtan, katha and magnificent abhishek of Lord Ram.', time: '6:00 AM — 10:00 PM', tag: 'Grand Utsav' },
  { day: '20', month: 'Apr', title: 'Swaminarayan Jayanti', desc: 'Celebrate the divine birthday of Bhagwan Swaminarayan with grand procession.', time: '5:00 AM — 11:00 PM', tag: 'Main Festival' },
  { day: '27', month: 'Apr', title: 'Hanuman Jayanti Utsav', desc: 'Special abhishek and sundarkand path with mass prasad distribution.', time: '5:30 AM — 8:00 PM', tag: 'Utsav' },
  { day: '05', month: 'May', title: 'Akhand Ramayan Parayan', desc: '72-hour continuous recitation of the sacred Ramayan.', time: '72 Hours Continuous', tag: 'Special' },
  { day: '15', month: 'May', title: 'Youth Satsang Day', desc: 'A special day for youth with spiritual talks, cultural events, and community games.', time: '9:00 AM — 6:00 PM', tag: 'Youth' },
];
const timings = [
  ['Mangala Aarti', '6:00 AM'],
  ['Morning Darshan', '7:00 – 11:30 AM'],
  ['Rajbhog Aarti', '11:30 AM'],
  ['Afternoon Darshan', '4:00 – 8:00 PM'],
  ['Sandhya Aarti', '7:00 PM'],
  ['Shayan Aarti', '8:30 PM'],
];

function Events() {
  return (
    <Box component="section" className="events-section" id="events">
      <Box className="section-wrapper">
        <SectionHeader
          tag="Sacred Calendar"
          title="Upcoming Events\n& Programmes"
        />
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={8}>
            <Box className="events-list">
              {events.map((ev, i) => (
                <Box key={i} className="event-card fade-up" style={{ '--delay': `${i * 70}ms` }}>
                  <Box className="event-date-col">
                    <Typography className="ev-day">{ev.day}</Typography>
                    <Typography className="ev-month">{ev.month}</Typography>
                  </Box>
                  <Box className="event-vline" />
                  <Box className="event-body">
                    <Box className="ev-top">
                      <Typography className="ev-title">{ev.title}</Typography>
                      <Chip label={ev.tag} size="small" className="ev-chip" />
                    </Box>
                    <Typography className="ev-desc">{ev.desc}</Typography>
                    <Box className="ev-time">
                      <Clock size={11} />
                      {ev.time}
                    </Box>
                  </Box>
                  <Box className="event-arrow"><ChevronRight size={16} /></Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="timings-card fade-up">
              <Box className="timings-header">
                <Clock size={16} color="#C9A84C" />
                <Typography className="timings-title">Daily Darshan Timings</Typography>
              </Box>
              <Box className="timings-list">
                {timings.map(([label, time]) => (
                  <Box key={label} className="timing-row">
                    <span>{label}</span>
                    <span className="timing-time">{time}</span>
                  </Box>
                ))}
              </Box>
              <Box className="darshan-note">
                On festival days, timings may vary. Contact the temple office for updated schedules.
              </Box>
              <Button variant="contained" color="secondary" fullWidth className="timing-dl-btn">
                <Calendar size={14} />
                Download Full Calendar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// ── Gallery ──────────────────────────────────────────────────────
const galleryItems = [
  { label: 'Mandir Exterior', bg: 'linear-gradient(135deg,#8B2E2E,#C9A84C)', size: 'large', image: img2 },
  { label: 'Deity Darshan', bg: 'linear-gradient(135deg,#3D1500,#C9A84C)', size: 'sm' , image: img3},
  { label: 'Festival Lights', bg: 'linear-gradient(135deg,#1A1A3D,#5C5CB4)', size: 'sm' , image: img4},
  { label: 'Sacred Garden', bg: 'linear-gradient(135deg,#0A2A1A,#2A8B4C)', size: 'sm', image: img1 },
  { label: 'Aarti Ceremony', bg: 'linear-gradient(135deg,#2A1A0A,#8B5A1A)', size: 'sm', image: img1 },
  { label: 'Architecture', bg: 'linear-gradient(135deg,#1A0A2A,#5C1A8B)', size: 'sm', image: img1 },
  { label: 'Devotees Sabha', bg: 'linear-gradient(135deg,#3D2A00,#8B6914)', size: 'sm', image: img1 },
];

function Gallery() {
  return (
    <Box component="section" className="gallery-section" id="gallery">
      <Box className="section-wrapper">
        <SectionHeader tag="Visual Journey" title="Temple Gallery" center />
        <Box className="gallery-grid">
          {galleryItems.map((item, i) => (
           <Box
  key={i}
  className={`gallery-item gallery-item--${item.size} fade-up`}
  sx={{
    backgroundImage: `
      linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)),
      url(${item.image})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  style={{ '--delay': `${i * 60}ms` }}
>
              <Box className="gallery-shimmer" />
              <Box className="gallery-overlay">
                <Typography className="gallery-label">{item.label}</Typography>
                <Box className="gallery-plus">+</Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button component={Link} to="/gallery" variant="outlined" className="gallery-view-all">
            View Full Gallery <ArrowRight size={15} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// ── Contact Quick Bar ─────────────────────────────────────────────
function ContactBar() {
  return (
    <Box className="contact-bar">
      <Box className="section-wrapper">
        <Grid container spacing={2} justifyContent="center">
          {[
            { Icon: MapPin, label: 'Vadtal, Rajkot Dist., Gujarat', sub: 'Get Directions' },
            { Icon: Phone, label: '+91 99999 99999', sub: 'Call the Temple' },
            { Icon: Clock, label: 'Open 365 Days', sub: '6:00 AM – 9:00 PM' },
          ].map(({ Icon, label, sub }, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box className="cbar-item fade-up" style={{ '--delay': `${i * 80}ms` }}>
                <Box className="cbar-icon"><Icon size={20} color="#C9A84C" /></Box>
                <Box>
                  <Typography className="cbar-label">{label}</Typography>
                  <Typography className="cbar-sub">{sub}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// ── Newsletter ───────────────────────────────────────────────────
function Newsletter() {
  return (
    <Box component="section" className="newsletter-section">
      <Box className="nl-mandala" />
      <Box className="section-wrapper" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Box className="nl-icon-wrap fade-up">
          <Mail size={28} color="#C9A84C" />
        </Box>
        <SectionHeader
          tag="Stay Connected"
          title="Receive Divine Updates"
          desc="Get notified about upcoming festivals, satsang programmes, and the latest news from Vadtal Dham."
          light center
        />
        <Box className="nl-form fade-up">
          <input type="email" className="nl-input" placeholder="Enter your email address" />
          <Button variant="contained" color="secondary" className="nl-btn">
            Subscribe
          </Button>
        </Box>
        <Typography className="nl-note fade-up">
          Join 10,000+ devotees already receiving updates
        </Typography>
      </Box>
    </Box>
  );
}

// ── Home ──────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = e.target.style.getPropertyValue('--delay') || '0ms';
          setTimeout(() => e.target.classList.add('visible'), parseInt(delay));
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <HeroSlider />
      <Marquee />
      <About />
      <DarshanCards />
      <Events />
      <Gallery />
      <ContactBar />
      <Newsletter />
    </>
  );
}