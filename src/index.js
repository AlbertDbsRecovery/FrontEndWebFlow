import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Material UI Imports
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/roboto';

// Creează un theme de bază, îl poți personaliza ulterior
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Albastru default Material UI
    },
    secondary: {
      main: '#9c27b0', // Mov
    },
  },
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
