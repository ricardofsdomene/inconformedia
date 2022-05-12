import { GetServerSideProps } from "next";

import {
  Box,
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  IconButton,
  Img,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
  useEditableControls,
  useEditableState,
  useToast,
  Checkbox,
  Image,
} from "@chakra-ui/react";

import React, { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import { api } from "../services/apiClient";
import {
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiEdit2,
  FiTrash2,
  FiCommand,
} from "react-icons/fi";
import { RiCopperDiamondFill } from "react-icons/ri";
import { AiFillHome, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { BiCaretDown } from "react-icons/bi";

export default function Index() {
  const { user, signOut } = useContext(AuthContext);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  function Header() {
    return (
      <Flex
        flexDir="row"
        w="100vw"
        p="2"
        align="center"
        justify="space-between"
        style={{ height: 100, paddingLeft: isWideVersion ? 350 : 0 }}
        bg="#1B1D1F"
      >
        <Flex
          mx="2"
          bg="#272B30"
          style={{ height: 60, width: "auto" }}
          borderRadius="5"
          align="center"
          pl="4"
        >
          <Icon mr="2" as={AiOutlineSearch} fontSize="22" color="#FFF" />
          <Input
            placeholder="Pesquise ou aperte command"
            mx="2"
            bg="#272B30"
            style={{
              height: 60,
              width: isWideVersion ? 250 : 150,
              border: "0px solid transparent",
            }}
            borderRadius="5"
          />
          <Flex
            borderRadius="5"
            bg="#333"
            mr="2"
            align="center"
            p="2"
            px="3"
            justify="center"
          >
            <Icon ml="2" as={FiCommand} fontSize="22" color="#FFF" />
            <Text ml="2" color="#FFF">
              F
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir="row" p="2">
          <Flex
            _hover={{
              cursor: "pointer",
              opacity: 0.8,
            }}
            borderRadius="5"
            justifyContent="center"
            alignItems="center"
            mr="2"
            style={{ height: 60, width: 90 }}
          >
            <Text color="#FFF" fontWeight="bold" fontSize="lg">
              Entrar
            </Text>
          </Flex>
          <Flex
            _hover={{
              cursor: "pointer",
              opacity: 0.8,
            }}
            justifyContent="center"
            alignItems="center"
            borderRadius="5"
            style={{ height: 60, width: 120 }}
            bg="#2B85FF"
          >
            <Text color="#FFF" fontWeight="bold" fontSize="lg">
              Registrar
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Flex direction="column" h="100vh" bg="#eee">
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  return {
    props: {},
  };
};
