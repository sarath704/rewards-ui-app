import { useColorModeValue, Box } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import { FiHome, FiTrendingUp } from "react-icons/fi";
interface LinkItemProps {
  name: string;
  icon: any;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "All Transactions", icon: FiHome, href: "/" },
  { name: "Add new transaction", icon: FiTrendingUp, href: "/add" },
];

const SideBar = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SideBar;
