import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">About Us</Heading>
        <Text>
          Financial Times is a leading global news organization, recognized internationally for its authority, integrity, and accuracy.
        </Text>
        <Text>
          Our mission is to deliver reliable and insightful news to our readers, helping them make informed decisions in a complex world.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;