import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?city,green)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          UrbanFlow
        </Typography>
        <Typography variant="h5" gutterBottom>
          Optimizează-ți rutele urbane și redu amprenta de carbon.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          sx={{ mt: 2 }}
        >
          Începe acum
        </Button>
      </Container>
    </Box>
  );
}

export default HomePage;
