import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Card,
  CardContent,
} from '@mui/material';

const UserGamification = () => {
  // Ex.: un scor, un nivel curent, un array de trofee
  const [userPoints] = useState(1200);
  const [achievements] = useState([
    { title: 'Eco Explorer', description: 'Ai ales 10 rute eco!' },
    { title: 'Public Transport Hero', description: '100 călătorii cu tramvai/autobuz!' },
  ]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gamificare și Recompense
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Acumulează puncte și deblochează trofee pentru alegeri eco-friendly.
      </Typography>

      {/* Exemplu de bară de progres pentru puncte */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Punctele tale: {userPoints}</Typography>
        <LinearProgress variant="determinate" value={(userPoints % 1000) / 10} />
        <Typography variant="caption">
          Nivel {Math.floor(userPoints / 1000) + 1} (progres {(userPoints % 1000)}/1000)
        </Typography>
      </Box>

      {/* Listă cu realizări (trofee) */}
      <Typography variant="h6" gutterBottom>
        Realizări obținute
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {achievements.map((achv, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="subtitle1">{achv.title}</Typography>
              <Typography variant="body2">{achv.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default UserGamification;
