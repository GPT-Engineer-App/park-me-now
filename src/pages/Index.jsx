import { Box, Heading, Container, SimpleGrid, Button, Text, useToast } from "@chakra-ui/react";
import { FaCar, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleBookSpot = (spotId) => {
    // Simulate booking spot
    toast({
      title: `Spot ${spotId} booked!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // Mock data for parking spots
  const parkingSpots = [
    { id: 1, isAvailable: true },
    { id: 2, isAvailable: false },
    { id: 3, isAvailable: true },
    { id: 4, isAvailable: true },
    // Add more spots as needed
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6} size="xl" textAlign="center">
        Welcome to ParkEasy
      </Heading>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={5}>
        {parkingSpots.map((spot) => (
          <Box key={spot.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center">
            <FaCar size="3em" />
            <Text mt={4}>Spot {spot.id}</Text>
            <Button leftIcon={<FaPlusCircle />} colorScheme="teal" variant="solid" mt={3} isDisabled={!spot.isAvailable} onClick={() => handleBookSpot(spot.id)}>
              {spot.isAvailable ? "Book Now" : "Occupied"}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
