import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const ManageRoutes = () => {
  // Exemplu de state pentru a adăuga rute
  const [newRoute, setNewRoute] = useState('');
  const [routes, setRoutes] = useState([
    { id: 1, name: 'Ruta 1 - Transport Public' },
    { id: 2, name: 'Ruta 2 - Ridesharing' },
  ]);

  const handleAddRoute = () => {
    if (newRoute.trim() !== '') {
      const newId = routes.length + 1;
      setRoutes([...routes, { id: newId, name: newRoute }]);
      setNewRoute('');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Configurare și Management al Rutelor
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Integrare API-uri de transport public și parteneriate cu servicii de ridesharing
        pentru a gestiona și actualiza rutele în timp real.
      </Typography>

      {/* Form pentru adăugare rută */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Nume Rută"
          variant="outlined"
          value={newRoute}
          onChange={(e) => setNewRoute(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddRoute}>
          Adaugă Rută
        </Button>
      </Box>

      {/* Listă cu rute existente */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Rută</TableCell>
              <TableCell>Nume Rută</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routes.map((route) => (
              <TableRow key={route.id}>
                <TableCell>{route.id}</TableCell>
                <TableCell>{route.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ManageRoutes;
