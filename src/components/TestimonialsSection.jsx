import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Avatar,
  IconButton
} from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: '1',
      name: 'John Doe',
      designation: 'Company / Designation',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: '2',
      name: 'Jane Smith',
      designation: 'Company / Designation',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b668b93c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      designation: 'Company / Designation',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#1f2937',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Testimonials
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={6} lg={4} key={testimonial.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#6b7280',
                      mb: 3,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {testimonial.content}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 48,
                        height: 48,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#1f2937',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#6b7280',
                        }}
                      >
                        {testimonial.designation}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
