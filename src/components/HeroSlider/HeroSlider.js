// src/components/HeroSlider/HeroSlider.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './HeroSlider.scss';
import images1 from '../../Images/img1.jpg';
import images2 from '../../Images/img2.jpg';
import images3 from '../../Images/img3.jpg';
import images4 from '../../Images/img4.jpg';

const slides = [
  {
    id: 0,
    eyebrow: '॥ Jai Swaminarayan ॥',
    title: 'Welcome to Vadtal Dham',
    subtitle: 'A divine abode of peace, devotion, and spiritual awakening — where every soul finds its path to the Lord.',
    primaryBtn: { label: 'View Darshan Timings', to: '/darshan' },
    ghostBtn: { label: 'Explore Temple', to: '/about' },
    image: images1,
    overlay: 'linear-gradient(160deg, rgba(92,26,26,0.72) 0%, rgba(26,10,10,0.6) 50%, rgba(61,18,0,0.55) 100%)',
  },
  {
    id: 1,
    eyebrow: 'Divine Festivals & Celebrations',
    title: 'Experience the Joy of Parva',
    subtitle: 'Celebrate sacred festivals with thousands of devotees. From Janmashtami to Diwali — every parva is a journey of devotion.',
    primaryBtn: { label: 'Upcoming Events', to: '/events' },
    ghostBtn: { label: 'View Gallery', to: '/gallery' },
    image: images2,
    overlay: 'linear-gradient(160deg, rgba(74,32,0,0.72) 0%, rgba(26,10,10,0.6) 50%, rgba(92,26,26,0.55) 100%)',
  },
  {
    id: 2,
    eyebrow: 'Spiritual Services & Seva',
    title: 'Serve with Pure Devotion',
    subtitle: 'Join our vibrant satsang community. Offer your seva, participate in katha, and walk the path of Dharma together.',
    primaryBtn: { label: 'Join Satsang', to: '/contact' },
    ghostBtn: { label: 'Offer Seva', to: '/contact' },
    image: images3,
    overlay: 'linear-gradient(160deg, rgba(26,10,42,0.72) 0%, rgba(10,10,26,0.6) 50%, rgba(58,26,0,0.55) 100%)',
  },
  {
    id: 3,
    eyebrow: 'Sacred Pilgrimage',
    title: 'Find Peace Within',
    subtitle: 'Embark on a spiritual journey and discover the divine grace that flows through every corner of Vadtal Dham.',
    primaryBtn: { label: 'Plan Your Visit', to: '/contact' },
    ghostBtn: { label: 'Learn More', to: '/about' },
    image: images4,
    overlay: 'linear-gradient(160deg, rgba(10,26,10,0.72) 0%, rgba(10,10,26,0.6) 50%, rgba(92,26,26,0.55) 100%)',
  },
];

// Infinite loop trick: clone first and last slides
// Track order: [last_clone, slide0, slide1, slide2, slide3, first_clone]
const TOTAL = slides.length;

export default function HeroSlider() {
  // Start at index 1 (first real slide, after the cloned last)
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);

  // Extended slides array: clone last at front, clone first at end
  const extSlides = [slides[TOTAL - 1], ...slides, slides[0]];

  const goToTrack = useCallback((index, animate = true) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(animate);
    setTrackIndex(index);
    setTimeout(() => { isAnimating.current = false; }, 700);
  }, []);

  const next = useCallback(() => {
    goToTrack(trackIndex + 1);
  }, [trackIndex, goToTrack]);

  const prev = useCallback(() => {
    goToTrack(trackIndex - 1);
  }, [trackIndex, goToTrack]);

  // After sliding to clone, silently jump to real slide
  useEffect(() => {
    if (trackIndex === extSlides.length - 1) {
      // Slid to cloned first → jump to real first (index 1)
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(1);
      }, 700);
      return () => clearTimeout(timer);
    }
    if (trackIndex === 0) {
      // Slid to cloned last → jump to real last
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(TOTAL);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [trackIndex, extSlides.length]);

  // Re-enable transition after silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  // Real current slide index (0-based) for dots
  const realIndex = trackIndex === 0
    ? TOTAL - 1
    : trackIndex === extSlides.length - 1
    ? 0
    : trackIndex - 1;

  const goToDot = (i) => goToTrack(i + 1);

  return (
    <Box className="hero-slider" sx={{marginTop: '70px !important'}}>
      {/* Slides Track */}
      <Box
        className="slides-track"
        sx={{
          transform: `translateX(-${trackIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)' : 'none',
        }}
      >
        {extSlides.map((slide, i) => (
          <Box
            key={i}
            className="slide"
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay */}
            <Box className="slide-overlay" sx={{ background: slide.overlay }} />

            <Box className="slide-om">ॐ</Box>

            <Box className="slide-content">
              <Typography className="slide-eyebrow">{slide.eyebrow}</Typography>
              <Typography variant="h1" className="slide-title">
                {slide.title.split('\n').map((line, j) => (
                  <React.Fragment key={j}>
                    {line}
                    {j < slide.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
              <Typography className="slide-subtitle">{slide.subtitle}</Typography>
              <Box className="slide-btns">
                <Button
                  component={Link}
                  to={slide.primaryBtn.to}
                  variant="contained"
                  color="secondary"
                  className="slide-btn-primary"
                >
                  {slide.primaryBtn.label}
                </Button>
                <Button
                  component={Link}
                  to={slide.ghostBtn.to}
                  variant="outlined"
                  className="slide-btn-ghost"
                >
                  {slide.ghostBtn.label}
                </Button>
              </Box>
            </Box>

            {/* Temple SVG decoration */}
            <svg className="temple-silhouette" viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="350,10 370,80 330,80" fill="white" />
              <rect x="320" y="80" width="60" height="40" fill="white" />
              <polygon points="250,50 265,100 235,100" fill="white" />
              <rect x="230" y="100" width="35" height="30" fill="white" />
              <polygon points="450,50 465,100 435,100" fill="white" />
              <rect x="430" y="100" width="35" height="30" fill="white" />
              <rect x="180" y="130" width="340" height="70" fill="white" />
              <rect x="160" y="185" width="380" height="15" fill="white" />
              <rect x="210" y="130" width="12" height="70" fill="rgba(0,0,0,0.12)" />
              <rect x="260" y="130" width="12" height="70" fill="rgba(0,0,0,0.12)" />
              <rect x="418" y="130" width="12" height="70" fill="rgba(0,0,0,0.12)" />
              <rect x="478" y="130" width="12" height="70" fill="rgba(0,0,0,0.12)" />
              <rect x="170" y="180" width="60" height="80" fill="white" opacity="0.95" />
              <ellipse cx="350" cy="10" rx="10" ry="10" fill="white" />
            </svg>
          </Box>
        ))}
      </Box>

      {/* Dots */}
      <Box className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === realIndex ? 'active' : ''}`}
            onClick={() => goToDot(i)}
          />
        ))}
      </Box>

      {/* Arrows */}
      <Box className="slide-arrows">
        <IconButton className="arrow-btn" onClick={prev}><ArrowBackIcon /></IconButton>
        <IconButton className="arrow-btn" onClick={next}><ArrowForwardIcon /></IconButton>
      </Box>

      {/* Scroll indicator */}
      <Box className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </Box>
    </Box>
  );
}