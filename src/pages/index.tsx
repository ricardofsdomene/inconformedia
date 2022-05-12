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

import Header from "../components/Header";
import { RiCloseLine, RiPlayFill, RiPlayLine } from "react-icons/ri";

export default function Index() {
  const { user, signOut } = useContext(AuthContext);

  const [banner, setBanner] = useState(false);

  const size = useWindowSize();

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

  function Banner() {
    return (
      <Flex flexDir="column" p="4" w="100%" bg="#999">
        <Flex justify="space-between" w="100%" align="center">
          <Text color="#FFF" fontWeight="bold" fontSize="20" w="80%">
            Coronavirus (COVID-19) resources and updates
          </Text>
          <Icon
            cursor="pointer"
            onClick={() => setBanner(!banner)}
            as={RiCloseLine}
            color="#FFF"
            fontSize="20"
          />
        </Flex>

        <Text color="#FFF" w="80%">
          The safety and well-being of everyone who uses Uber is always our
          priority. We are actively monitoring the coronavirus (COVID-19)
          situation and are taking steps to help keep our communities safe.
          Click here for more information.
        </Text>
      </Flex>
    );
  }

  function Apresentation() {
    return (
      <Flex flexDir="column" pt="5" mx="auto" maxWidth={1000}>
        <Text
          color="#333"
          fontWeight="bold"
          fontSize="4xl"
          w={isWideVersion ? "60%" : "100%"}
        >
          A plataforma completa para transformar criadores de conteúdo em
          empreendedores
        </Text>
        <Text color="#333" fontSize="lg" w={isWideVersion ? "60%" : "100%"}>
          Crie seus produtos, acelere suas vendas, gerencie seus resultados e
          escale seu negócio digital.
        </Text>
        <Flex
          cursor="pointer"
          mt="4"
          borderRadius="5"
          bg="#F00066"
          justify="center"
          align="center"
          style={{ height: 50, width: 200 }}
        >
          <Text color="#FFF" fontWeight="bold">
            Criar seu produto
          </Text>
        </Flex>
        <Flex mt="10" justify="center" align="center">
          <Image
            maxW={1000}
            mx="auto"
            borderRadius="5"
            src="https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Flex
            cursor="pointer"
            borderRadius="full"
            p="5"
            border="2.5px solid #FFF"
            position="absolute"
            bg="rgba(0,0,0, 0.5)"
            justify="center"
            align="center"
          >
            <Icon as={RiPlayFill} color="#FFF" fontSize="50" />
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Marketplace() {
    return (
      <Flex
        flexDir="column"
        borderRadius="5"
        p="5"
        mt="5"
        mx="auto"
        bg="#000"
        w="100%"
        maxWidth={1000}
      >
        <Text color="#FFF" fontWeight="bold" fontSize="4xl">
          Nos temos a melhor estrutura de marketplace
        </Text>
        <Text color="#FFF" fontSize="lg" w={isWideVersion ? "60%" : "100%"}>
          Crie seus produtos, acelere suas vendas, gerencie seus resultados e
          escale seu negócio digital.
        </Text>
        <Flex
          cursor="pointer"
          mt="4"
          borderRadius="5"
          bg="#F00066"
          justify="center"
          align="center"
          style={{ height: 50, width: 200 }}
        >
          <Text color="#FFF" fontWeight="bold">
            Acessar marketplace
          </Text>
        </Flex>
      </Flex>
    );
  }

  function Footer() {
    return (
      <Flex
        flexDir="column"
        borderRadius="5"
        p="5"
        mt="5"
        mx="auto"
        w="100%"
        maxWidth={1000}
        boxShadow="rgba(0,0,0,0.1) 0 0 10px"
      >
        <Text color="#000" fontSize="sm">
          Termos e Politicas
        </Text>
        <Text mt="4" color="#555" fontSize="sm">
          Inconformedia — 2022 © Todos os direitos reservados
        </Text>
        <Text mt="4" color="#555" fontSize="sm">
          Inconformedia
          <Text color="#555" fontSize="sm">
            CNPJ nº. 13.427.325/0001-05
          </Text>
          <Text color="#555" fontSize="sm">
            Endereço: Avenida Assis Chateaubriand, nº 499, Bairro Floresta, Belo
            Horizonte -MG, CEP nº 30.150-101
          </Text>
          <Text color="#555" fontSize="sm">
            Contato: suporte@inconformedia.com
          </Text>
        </Text>
      </Flex>
    );
  }

  return (
    <Flex flex="1" flexDir="column">
      <Header />
      {banner && <Banner />}
      <Apresentation />
      <Marketplace />
      <Footer />
    </Flex>
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
