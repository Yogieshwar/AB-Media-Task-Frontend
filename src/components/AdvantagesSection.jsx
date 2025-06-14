
import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: '⏰',
      title: 'Save Time',
      description: 'No More Switching For Packages Or Plans'
    },
    {
      icon: '💰',
      title: 'Save Money',
      description: 'Compare, Negotiate, And Choose The Best'
    },
    {
      icon: '🏆',
      title: 'Trusted Network',
      description: 'A Trusted Network Of 7000+ Travel Agents'
    },
    {
      icon: '📚',
      title: 'Multiple Options',
      description: 'Itineraries & Travel Tips From Trusted Agents'
    }
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Advantages
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            You can enjoy our trip experiences and trip offerings of services and choices
            from us with the very first travel agents in your area or elsewhere
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '& .advantage-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Avatar
                  className="advantage-icon"
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'white',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2rem',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {advantage.icon}
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 1,
                  }}
                >
                  {advantage.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {advantage.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;