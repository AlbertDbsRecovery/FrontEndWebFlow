import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';

const AdminDashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panou de Control al Traficului
      </Typography>

      {/* Secțiunea 1: Rapoarte și Alerte */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Rapoarte Curente
              </Typography>
              <Typography variant="body2">
                Aici se vor afișa rapoartele primite de la utilizatori: întârzieri,
                blocaje, accidente, feedback etc.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Vezi toate rapoartele</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Alerte Sistem
              </Typography>
              <Typography variant="body2">
                Notificări și alerte generate automat (ex: trafic intens peste
                un anumit prag, condiții meteo etc.)
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Vezi toate alertele</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Secțiunea 2: Harta Interactivă */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Harta de Trafic în Timp Real
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '400px',
            backgroundColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Placeholder - aici integrezi Google Maps / Leaflet / altă bibliotecă */}
          <Typography variant="body2">
            [Harta interactivă cu trafic în timp real]
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
