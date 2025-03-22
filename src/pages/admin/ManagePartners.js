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
  Select,
  MenuItem,
} from '@mui/material';

const ManagePartners = () => {
  const [partners, setPartners] = useState([
    { id: 1, name: 'TransPublic SA', type: 'Transport Public', feedback: 'Foarte bun' },
    { id: 2, name: 'EcoRide', type: 'Ridesharing', feedback: 'Bun' },
  ]);

  const [newPartnerName, setNewPartnerName] = useState('');
  const [newPartnerType, setNewPartnerType] = useState('Transport Public');

  const handleAddPartner = () => {
    if (newPartnerName.trim() !== '') {
      const newId = partners.length + 1;
      setPartners([
        ...partners,
        { id: newId, name: newPartnerName, type: newPartnerType, feedback: 'N/A' },
      ]);
      setNewPartnerName('');
      setNewPartnerType('Transport Public');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Administrarea Partenerilor
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Gestionează conturile și privilegiile partenerilor (operatori de transport,
        ridesharing etc.). Monitorizează feedback-ul utilizatorilor.
      </Typography>

      {/* Form pentru adăugare partener nou */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Nume Partener"
          variant="outlined"
          value={newPartnerName}
          onChange={(e) => setNewPartnerName(e.target.value)}
        />
        <Select
          value={newPartnerType}
          onChange={(e) => setNewPartnerType(e.target.value)}
        >
          <MenuItem value="Transport Public">Transport Public</MenuItem>
          <MenuItem value="Ridesharing">Ridesharing</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleAddPartner}>
          Adaugă Partener
        </Button>
      </Box>

      {/* Tabel cu parteneri */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nume</TableCell>
              <TableCell>Tip</TableCell>
              <TableCell>Feedback Utilizatori</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell>{partner.id}</TableCell>
                <TableCell>{partner.name}</TableCell>
                <TableCell>{partner.type}</TableCell>
                <TableCell>{partner.feedback}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default ManagePartners;
