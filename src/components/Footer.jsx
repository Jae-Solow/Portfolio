import { Box, Container, IconButton, Typography } from '@mui/material';
import { 
  FaGithub, 
  FaFacebook, 
  FaInstagram, 
  FaMastodon,
  FaDiscord,
  FaTwitter 
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub />
          </IconButton>
          <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </IconButton>
          <IconButton href="https://mastodon.social" target="_blank" aria-label="Mastodon">
            <FaMastodon />
          </IconButton>
          <IconButton href="https://discord.com" target="_blank" aria-label="Discord">
            <FaDiscord />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Your Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;