import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

function DashboardUser() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Panou Utilizator
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aici poți verifica rutele, raportările trimise sau recompensele eco-friendly.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* Card Puncte Eco */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Puncte Eco</Typography>
              <Typography variant="h4" color="primary">
                120
              </Typography>
              <Typography variant="body2">
                Ai câștigat 120 de puncte folosind transport eco-friendly.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Rute Salvate */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Rute Salvate</Typography>
              <Typography variant="h4" color="secondary">
                5
              </Typography>
              <Typography variant="body2">
                Ai 5 rute preferate salvate.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card Rapoarte Trimise */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Rapoarte Trimise</Typography>
              <Typography variant="h4" color="primary">
                2
              </Typography>
              <Typography variant="body2">
                Ai 2 rapoarte de trafic active.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardUser;
