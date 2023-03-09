import { Link, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: any;
  children: any;
  href: string;
}
export const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link
      as={ReachLink}
      to={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
