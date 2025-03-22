import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
} from '@mui/material';

const UserRoutes = () => {
  const [sortBy, setSortBy] = useState('time');
  const [transportFilter, setTransportFilter] = useState('all');

  // Exemplu de rute dummy
  const routesData = [
    {
      id: 1,
      name: 'Linia 5 - Autobuz Electric',
      time: 30,
      cost: 2,
      ecoScore: 'High',
      type: 'public',
    },
    {
      id: 2,
      name: 'Bolt Ride - Ruta Centru',
      time: 15,
      cost: 10,
      ecoScore: 'Medium',
      type: 'ridesharing',
    },
    {
      id: 3,
      name: 'Linia 2 - Tramvai',
      time: 25,
      cost: 3,
      ecoScore: 'High',
      type: 'public',
    },
  ];

  // Funcție de sortare/filtrare
  const filteredRoutes = routesData.filter((r) => {
    if (transportFilter === 'all') return true;
    return r.type === transportFilter;
  });

  // Sortare după timp sau cost
  filteredRoutes.sort((a, b) => {
    if (sortBy === 'time') {
      return a.time - b.time;
    } else {
      return a.cost - b.cost;
    }
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Vizualizare Rute și Opțiuni de Transport
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Filtrează și sortează rutele după timp de călătorie, cost sau impact ecologic.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="time">Sortare după Timp</MenuItem>
          <MenuItem value="cost">Sortare după Cost</MenuItem>
        </Select>

        <Select
          value={transportFilter}
          onChange={(e) => setTransportFilter(e.target.value)}
        >
          <MenuItem value="all">Toate Tipurile</MenuItem>
          <MenuItem value="public">Transport Public</MenuItem>
          <MenuItem value="ridesharing">Ridesharing</MenuItem>
        </Select>
      </Box>

      {/* Lista rutelor */}
      <Grid container spacing={2}>
        {filteredRoutes.map((route) => (
          <Grid item xs={12} md={4} key={route.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{route.name}</Typography>
                <Typography variant="body2">
                  Timp: {route.time} min • Cost: {route.cost} RON • Eco: {route.ecoScore}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserRoutes;
