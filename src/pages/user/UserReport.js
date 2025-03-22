import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
} from '@mui/material';

const UserReport = () => {
  const [reportType, setReportType] = useState('problem');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reportare trimisă: ${reportType}, descriere: ${description}`);
    // Aici trimiți date la backend
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Raportare și Sugestii
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Raportează probleme de mobilitate sau oferă sugestii pentru îmbunătățirea rutelor.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="problem">Problemă trafic</MenuItem>
          <MenuItem value="suggestion">Sugestie traseu</MenuItem>
        </Select>

        <TextField
          label="Descriere"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" type="submit">
          Trimite Raport
        </Button>
      </Box>
    </Container>
  );
};

export default UserReport;
