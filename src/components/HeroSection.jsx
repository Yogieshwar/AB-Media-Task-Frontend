import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #475569 50%, #1e293b 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            fontWeight: 'bold',
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          Discover Your Next
          <Typography
            component="span"
            sx={{
              display: 'block',
              color: '#fbbf24',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            Adventure
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            color: '#e5e7eb',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
          }}
        >
          Choose from our curated experiences, customized for every kind of traveler.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#fbbf24',
            color: 'black',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: '#f59e0b',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          BOOK NOW
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mt: 6,
            fontSize: '0.875rem',
          }}
        >
          {['Easy Booking', 'Curated Destinations', 'Trusted Support'].map((feature) => (
            <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#fbbf24',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Decorative sun icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 80,
          right: 80,
          color: '#fbbf24',
          opacity: 0.2,
          display: { xs: 'none', lg: 'block' },
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            width: 96,
            height: 96,
            position: 'relative',
            border: '4px solid #fbbf24',
            borderRadius: '50%',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
