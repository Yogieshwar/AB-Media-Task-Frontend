import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
 
} from "@mui/material";
import { UseDestination } from "../../api/UseDestination";

const PopularDestinations = () => {
  const { data: destinations, isLoading, error } = UseDestination();

  if (error) {
    console.error("Error fetching destinations:", error);
    return (
      <Box sx={{ py: 8, px: 2, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography variant="h6" color="error" textAlign="center">
            Failed to load destinations. Please try again later.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#1f2937",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Explore Most Popular Destinations
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6b7280",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Plan your perfect trip with our most loved and best-selling tour
            packages
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <Skeleton variant="rectangular" height={192} />
                    <CardContent>
                      <Skeleton variant="text" width="75%" height={32} />
                      <Skeleton variant="text" width="50%" height={20} />
                      <Skeleton variant="text" width="33%" height={32} />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : destinations?.map((destination) => (
                <Grid item xs={12} md={6} lg={4} key={destination._id}sx={{ display: 'flex' }} >
                  <Card
                    sx={{
                      height: "100%",
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                        "& .card-media": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden", height: 192 }}>
                      <CardMedia
                        component="img"
                        height="192"
                        image={destination.image}
                        alt={destination.name}
                        className="card-media"
                        sx={{
                          height: 192,
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          ".MuiCard-root:hover &": {
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>

                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: "#0891b2",
                            textTransform: "uppercase",
                            letterSpacing: 1,
                          }}
                        >
                          {destination.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#0891b2",
                            fontWeight: "bold",
                          }}
                        >
                          Starting From ₹{destination.price.toLocaleString()}/-
                        </Typography>
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

export default PopularDestinations;
