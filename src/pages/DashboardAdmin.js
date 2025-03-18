import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'type', headerName: 'Tip raport', width: 150 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'user', headerName: 'Utilizator', width: 130 },
];

const rows = [
  { id: 1, type: 'Blocaj trafic', status: 'Deschis', user: 'Ion Popescu' },
  { id: 2, type: 'Incident autobuz', status: 'În lucru', user: 'Ana Ionescu' },
  { id: 3, type: 'Stradă închisă', status: 'Rezolvat', user: 'Mihai Georgescu' },
];

function DashboardAdmin() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Panou Admin
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aici poți vizualiza și gestiona rapoartele utilizatorilor.
      </Typography>

      <Box sx={{ height: 400, mt: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Box>
  );
}

export default DashboardAdmin;
