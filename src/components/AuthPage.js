import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const AuthPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici poți implementa logica reală de login
    // Ex: apel la backend, validare etc.
    // Demo: setăm direct rolul
    onLogin(role);
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" gutterBottom>
          Autentificare
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Select
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
            displayEmpty
            style={{ marginTop: 16 }}
          >
            <MenuItem value="user">Utilizator</MenuItem>
            <MenuItem value="admin">Administrator</MenuItem>
          </Select>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 24 }}
          >
            Autentifică-te
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AuthPage;
