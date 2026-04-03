// src/theme/muiTheme.js
import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#5C1A1A',       // Deep Maroon
      light: '#8B2E2E',
      dark: '#3D0A0A',
      contrastText: '#F5D68A',
    },
    secondary: {
      main: '#C9A84C',       // Gold
      light: '#F5D68A',
      dark: '#8B6914',
      contrastText: '#5C1A1A',
    },
    background: {
      default: '#FBF6EC',
      paper: '#FFFDF7',
    },
    text: {
      primary: '#1A0A0A',
      secondary: '#5a3a2a',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Nunito", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 28px',
          transition: 'all 0.25s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(201,168,76,0.35)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #5C1A1A, #8B2E2E)',
          color: '#F5D68A',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #C9A84C, #F5D68A)',
          color: '#5C1A1A',
        },
        outlinedPrimary: {
          borderColor: '#C9A84C',
          color: '#5C1A1A',
          '&:hover': {
            borderColor: '#8B6914',
            backgroundColor: 'rgba(201,168,76,0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 24px rgba(90,30,10,0.1)',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 40px rgba(90,30,10,0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(92,26,26,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1.5px solid rgba(139,105,20,0.5)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default muiTheme;