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
import { useRouter } from "next/router";
import React from "react";
import { AiFillAmazonSquare, AiFillCloud } from "react-icons/ai";
import { BiInfoCircle, BiListPlus, BiUserPlus } from "react-icons/bi";
import { FiArrowUpCircle } from "react-icons/fi";
import {
  RiInformationFill,
  RiLineFill,
  RiMenuLine,
  RiNotification2Line,
} from "react-icons/ri";

export default function Produtos() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const route = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  function Header() {
    return (
      <Flex
        position="fixed"
        style={{ height: 80, width: "100vw" }}
        bg="#eee"
        align="center"
        mx="auto"
        p="5"
        justify="space-between"
        flexDir="row"
      >
        <Flex flexDir="row" align="center">
          <Image
            src="https://o.remove.bg/downloads/15705da8-87b7-41ad-82a9-83ad0efa0e4c/Screen_Shot_2022-05-08_at_3.56.52_PM-removebg-preview.png"
            w="45"
            h="45"
            mr="2"
          />
          <Text
            fontSize={isWideVersion ? "2xl" : "md"}
            fontWeight="bold"
            color="#000"
          >
            Inconformedia
          </Text>
          <Flex
            style={{ height: 50, width: 1, backgroundColor: "#eee" }}
            mx="5"
          />
          {isWideVersion && (
            <>
              <Menu>
                <MenuButton>
                  <Text fontSize="md" cursor="pointer" color="#000">
                    Inconformedia
                  </Text>
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
              <Menu>
                <MenuButton ml="7">
                  <Text fontSize="md" cursor="pointer" color="#000">
                    Inconformedia
                  </Text>
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
            </>
          )}
        </Flex>
        <Flex flexDir="row" align="center">
          <Menu>
            <MenuButton mr="5">
              <Icon
                as={RiNotification2Line}
                mt="1.5"
                color="#777"
                fontSize="25"
              />
            </MenuButton>
            <MenuList
              zIndex="2"
              bg="#eee"
              style={{ height: "40vh" }}
            ></MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              <Avatar
                name="Ricardo Domene"
                size={isWideVersion ? "md" : "sm"}
              />
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

  function Paths() {
    return (
      <Flex
        align="center"
        style={{
          paddingBottom: 20,
          width: "100%",
          top: 80,
        }}
        justify="space-around"
        bg="#eee"
        borderBottom="1px solid #e0e0e0"
      >
        <Link href="/landing">
          <Text
            cursor="pointer"
            color="#333"
            textDecorationLine={
              route.pathname === "/landing" ? "underline" : "none"
            }
          >
            Dashboard
          </Text>
        </Link>
        <Link href="/produtos">
          <Text
            color="#333"
            cursor="pointer"
            textDecorationLine={
              route.pathname === "/produtos" ? "underline" : "none"
            }
          >
            Produtos
          </Text>
        </Link>
        <Text color="#333" cursor="pointer">
          Retiradas
        </Text>
        <Text color="#333" cursor="pointer">
          Assinantes
        </Text>
        <Text color="#333" cursor="pointer">
          ...
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <Header />
      <Flex flexDir="column" style={{ paddingTop: 80 }} p="4" bg="#eee">
        {!isWideVersion && (
          <>
            <Paths />
            <Flex align="center" justify="space-between">
              <Flex flexDir="column">
                <Text mt="5" color="#333" fontSize="md">
                  Dados de
                </Text>
                <Text color="#000" fontWeight="bold" fontSize="3xl">
                  Produtos
                </Text>
              </Flex>
              <Text fontSize="4xl" mt="4" ml="4"></Text>
            </Flex>
            <Flex overflow="auto">
              <Flex
                bg="#e0e0e0"
                mt="4"
                p="4"
                pb="5"
                borderRadius="5"
              >
                <Flex
                  mr="2"
                  flexDir="column"
                  borderRadius="12"
                  bg="#333"
                  p="10"
                  justify="center"
                  style={{ height: 200, width: 200 }}
                >
                  <Flex style={{ width: 30, height: 30 }} borderRadius="full">
                    <Icon as={AiFillCloud} fontSize="20" color="#FFF" />
                  </Flex>
                  <Flex mt="2">
                    <Text color="#eee">Faturamento</Text>
                    <Icon
                      as={RiInformationFill}
                      fontSize="16"
                      mt="1"
                      ml="1"
                      color="#FFF"
                    />
                  </Flex>
                  <Text color="#FFF" fontSize="44" mt={-2} fontWeight="bold">
                    50k
                  </Text>
                  <Flex align="center">
                    <Icon as={FiArrowUpCircle} color="green" fontSize="18" />
                    <Text color="green" fontSize="16" ml="2" fontWeight="bold">
                      +22%
                    </Text>
                    <div />
                  </Flex>
                </Flex>
                <Flex
                  mr="2"
                  flexDir="column"
                  borderRadius="12"
                  bg="#333"
                  p="10"
                  justify="center"
                  style={{ height: 200, width: 200 }}
                >
                  <Flex style={{ width: 30, height: 30 }} borderRadius="full">
                    <Icon as={AiFillCloud} fontSize="20" color="#FFF" />
                  </Flex>
                  <Flex mt="2">
                    <Text color="#eee">Assinantes</Text>
                    <Icon
                      as={RiInformationFill}
                      fontSize="16"
                      mt="1"
                      ml="1"
                      color="#FFF"
                    />
                  </Flex>
                  <Text color="#FFF" fontSize="44" mt={-2} fontWeight="bold">
                    325
                  </Text>
                  <Flex align="center">
                    <Icon as={FiArrowUpCircle} color="green" fontSize="18" />
                    <Text color="green" fontSize="16" ml="2" fontWeight="bold">
                      +249%
                    </Text>
                    <div />
                  </Flex>
                </Flex>
                <Flex
                  mr="2"
                  flexDir="column"
                  borderRadius="12"
                  bg="#333"
                  p="10"
                  justify="center"
                  style={{ height: 200, width: 200 }}
                >
                  <Flex style={{ width: 30, height: 30 }} borderRadius="full">
                    <Icon as={AiFillCloud} fontSize="20" color="#FFF" />
                  </Flex>
                  <Flex mt="2">
                    <Text color="#eee">Assinantes</Text>
                    <Icon
                      as={RiInformationFill}
                      fontSize="16"
                      mt="1"
                      ml="1"
                      color="#FFF"
                    />
                  </Flex>
                  <Text color="#FFF" fontSize="44" mt={-2} fontWeight="bold">
                    325
                  </Text>
                  <Flex align="center">
                    <Icon as={FiArrowUpCircle} color="green" fontSize="18" />
                    <Text color="green" fontSize="16" ml="2" fontWeight="bold">
                      +249%
                    </Text>
                    <div />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
}
