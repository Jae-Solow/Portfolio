import { Box, Paper, TextField, Button, Typography } from '@mui/material';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic will go here
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Contact;