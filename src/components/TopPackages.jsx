import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
} from '@mui/material';
import { usePackages } from '../../api/usePackages';

const TopPackages = () => {
  const { data: packages, isLoading, error } = usePackages();

  if (error) {
    console.error('Error fetching packages:', error);
    return (
      <Box sx={{ py: 8, px: 2, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h6" color="error" textAlign="center">
            Failed to load tour packages. Please try again later.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Top Selling Tour Packages of India
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Stay updated with our best-selling tour plans.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <Skeleton variant="rectangular" height={192} />
                    <CardContent>
                      <Skeleton variant="text" width="75%" height={32} />
                      <Skeleton variant="text" width="50%" height={20} />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : packages?.map((item, i) => (
                <Grid item xs={12} md={6} lg={4} key={i}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="192"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#0891b2',
                          mb: 1,
                          textTransform: 'capitalize',
                        }}
                      >
                        {item.title}
                      </Typography>

                      
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopPackages;
