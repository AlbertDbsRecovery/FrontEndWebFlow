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

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apelează API-ul de înregistrare
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Înregistrare
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Nume"
              name="name"
              fullWidth
              margin="normal"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Parola"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Înregistrare
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegisterPage;
