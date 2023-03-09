import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="gray.900" p={4}>
      <Flex align="center" justify="space-between">
        <Box>
          <Text fontSize="2xl" color={"white"}>
            Steller it solutions
          </Text>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Header;
