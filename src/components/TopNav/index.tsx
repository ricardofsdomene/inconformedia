import {
  Avatar,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { BiListPlus, BiLogOut, BiUserPlus } from "react-icons/bi";
import { RiMenuLine, RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";

export default function TopNav() {
  const { user, signOut } = useContext(AuthContext);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Flex
      zIndex="1000"
      position="fixed"
      boxShadow="rgba(0,0,0,0.1) 0 0 10px"
      bg="#FFF"
      style={{ height: 80, width: "100vw" }}
      align="center"
      mx="auto"
      p="5"
      justify="space-between"
      flexDir="row"
    >
      <Flex flexDir="row" align="center">
        <Link href={user && user._id ? "/dashboard" : "/"}>
          <Flex cursor="pointer" flexDir="row" align="center">
            <Image
              src="https://6978-2804-14c-3f89-8b76-f59d-1218-9869-def4.sa.ngrok.io/images/inconformedia.png"
              w="45"
              h="45"
              mr="2"
            />
            <Text
              fontSize={isWideVersion ? "2xl" : "md"}
              fontWeight="bold"
              color="#000"
            >
              uppernodes
            </Text>
          </Flex>
        </Link>
        <Flex
          style={{ height: 50, width: 1, backgroundColor: "#eee" }}
          mx="5"
        />
        {isWideVersion && (
          <>
            <Menu>
              <MenuButton>
                <Text fontSize="md" cursor="pointer" color="#000">
                  Adicionar
                </Text>
              </MenuButton>
              <MenuList zIndex="2" bg="#eee" py="0">
                <Link href="/create/curso">
                  <MenuItem
                    justifyContent="space-between"
                    py="4"
                    onClick={() => {
                      onOpen();
                    }}
                    color="#333"
                    fontSize="sm"
                  >
                    Curso
                    <Icon as={BiListPlus} fontSize="md" color="#facebook.400" />
                  </MenuItem>
                </Link>
                <MenuItem
                  justifyContent="space-between"
                  py="4"
                  onClick={() => {
                    onOpen();
                  }}
                  color="#333"
                  fontSize="sm"
                >
                  Instrutor
                  <Icon as={BiUserPlus} fontSize="md" color="#facebook.400" />
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Flex>
      <Flex flexDir="row" align="center">
        {isWideVersion && (
          <Menu>
            <MenuButton>
              <Avatar size="sm" />
            </MenuButton>
            <MenuList zIndex="2" bg="#eee" py="0">
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                {user &&
                  user.name.split(" ")[0] +
                    " " +
                    user.name.split(" ")[user.name.split(" ").length - 1]}
                <Icon as={BiListPlus} fontSize="md" color="#facebook.400" />
              </MenuItem>
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  signOut();
                }}
                color="#333"
                fontSize="sm"
              >
                Sair da sua conta
                <Icon as={BiLogOut} fontSize="md" color="#facebook.400" />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {!isWideVersion && (
          <Menu>
            <MenuButton ml="5">
              <Icon as={RiMenuLine} fontSize="22" color="#333" />
            </MenuButton>
            <MenuList bg="#eee" py="0">
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                Feature
                <Icon as={BiListPlus} fontSize="md" color="#facebook.400" />
              </MenuItem>
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                Feature
                <Icon as={BiUserPlus} fontSize="md" color="#facebook.400" />
              </MenuItem>
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                Feature
                <Icon as={BiListPlus} fontSize="md" color="#facebook.400" />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
}
