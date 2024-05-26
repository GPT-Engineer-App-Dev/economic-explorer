import { Container, Text, VStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box gridColumn={{ md: "span 2" }}>
          <Heading as="h1" mb={4}>Main News Section</Heading>
          <VStack spacing={4} align="start">
            <Box>
              <Heading as="h2" size="md">Headline 1</Heading>
              <Text>Summary of the news article goes here...</Text>
            </Box>
            <Box>
              <Heading as="h2" size="md">Headline 2</Heading>
              <Text>Summary of the news article goes here...</Text>
            </Box>
            <Box>
              <Heading as="h2" size="md">Headline 3</Heading>
              <Text>Summary of the news article goes here...</Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="start">
            <Box>
              <Heading as="h3" size="md">Additional Content 1</Heading>
              <Text>Details about additional content...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Additional Content 2</Heading>
              <Text>Details about additional content...</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;