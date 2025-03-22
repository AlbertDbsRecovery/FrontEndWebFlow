import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Trafic aglomerat în zona centrală' },
    { id: 2, message: 'Blocaj la intersecția X, rute ocolitoare recomandate' },
  ]);

  useEffect(() => {
    // Exemplu: poți simula un push websocket / SSE / poll periodic
    // setInterval(() => fetch noi notificări, etc.
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notificări și Alerte în Timp Real
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Aici primești notificări despre trafic, întârzieri și evenimente neprevăzute.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {notifications.map((notif) => (
          <Paper key={notif.id} sx={{ p: 2 }}>
            <Typography variant="body1">{notif.message}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default UserNotifications;
