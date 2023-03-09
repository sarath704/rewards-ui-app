import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="footer">
      <Box bg="gray.100" p={4}>
        <Flex align="center" justify="space-between">
          <Box>
            <Text fontSize="2xl">Footer</Text>
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </footer>
  );
};
export default Footer;
