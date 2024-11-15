import { Box, Paper, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Journey
        </Typography>
        <Typography paragraph>
          [Your journey description will go here]
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Certifications & Diplomas
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* Add your certifications here */}
          <Typography variant="subtitle1">
            [Your certifications will go here]
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default About;