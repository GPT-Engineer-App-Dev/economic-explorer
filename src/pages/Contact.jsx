import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">Contact Us</Heading>
        <Text>If you have any questions or feedback, feel free to reach out to us.</Text>
        <Text>Email: contact@financialtimes.com</Text>
        <Text>Phone: +123 456 7890</Text>
      </VStack>
    </Container>
  );
};

export default Contact;