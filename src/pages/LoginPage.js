import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apelează API-ul de login
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Autentificare
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Parola"
              type="password"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Nu ai cont? <Link to="/register">Înregistrează-te</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginPage;
