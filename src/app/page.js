import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to EmoVue
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
          Real-time emotion analysis from your webcam.
        </Typography>
        <Link href="/login" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '999px',
              padding: '12px 32px',
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
