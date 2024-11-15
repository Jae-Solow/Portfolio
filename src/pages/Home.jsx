import { Box, Grid, Typography, Paper } from '@mui/material';

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box
          component="img"
          sx={{
            width: 256,
            height: 256,
            borderRadius: '50%',
            border: '3px solid #1976d2',
            backgroundColor: '#e0e0e0'
          }}
          alt="Profile Picture"
          src="/Jimmy_Solow.jpg"
        />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Mission Statement
            </Typography>
            <Typography>
              [Your mission statement will go here]
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Vision
            </Typography>
            <Typography>
              [Your vision statement will go here]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;