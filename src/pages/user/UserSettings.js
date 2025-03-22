import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const UserSettings = () => {
  const [notifyEnabled, setNotifyEnabled] = useState(true);
  const [preferredTransport, setPreferredTransport] = useState('public');
  const [favoriteRoute, setFavoriteRoute] = useState('');
  const [savedRoutes, setSavedRoutes] = useState(['Linia 1 - Tramvai']);

  const handleSaveRoute = () => {
    if (favoriteRoute.trim() !== '') {
      setSavedRoutes([...savedRoutes, favoriteRoute]);
      setFavoriteRoute('');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Personalizare și Setări de Profil
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Aici poți salva rute preferate, ajusta preferințe de transport și notificări.
      </Typography>

      {/* Preferințe Notificări */}
      <Box sx={{ mb: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={notifyEnabled}
              onChange={(e) => setNotifyEnabled(e.target.checked)}
            />
          }
          label="Notificări Activate"
        />
      </Box>

      {/* Preferințe Transport */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Preferință Transport
        </Typography>
        <Select
          value={preferredTransport}
          onChange={(e) => setPreferredTransport(e.target.value)}
        >
          <MenuItem value="public">Transport Public</MenuItem>
          <MenuItem value="ridesharing">Ridesharing</MenuItem>
          <MenuItem value="eco">Eco-friendly (bicicletă / trotinetă)</MenuItem>
        </Select>
      </Box>

      {/* Rute Favorite */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Rute Favorite
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Nume Rută"
            value={favoriteRoute}
            onChange={(e) => setFavoriteRoute(e.target.value)}
          />
          <Button variant="contained" onClick={handleSaveRoute}>
            Salvează Rută
          </Button>
        </Box>
        <List sx={{ mt: 2 }}>
          {savedRoutes.map((route, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={route} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default UserSettings;
