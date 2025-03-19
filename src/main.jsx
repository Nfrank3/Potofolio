import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import App from './App';

const root = createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20',
      light: '#2E7D32',
      dark: '#0D3F11',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#81C784',
      light: '#A5D6A7',
      dark: '#60B363',
      contrastText: '#1B5E20'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#4A4A4A'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#1B5E20'
    },
    h2: {
      fontWeight: 500,
      color: '#2E7D32'
    },
    button: {
      fontWeight: 500,
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px'
        }
      }
    }
  }
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);