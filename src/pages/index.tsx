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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import ReactPlayer from "react-player";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import { api } from "../services/apiClient";

import { MdTouchApp } from "react-icons/md";

import Header from "../components/Header";
import {
  RiCloseLine,
  RiPauseFill,
  RiPlayFill,
  RiPlayLine,
} from "react-icons/ri";

export default function Index() {
  const { user, signOut } = useContext(AuthContext);

  const [playing, setPlaying] = useState(true);

  const [banner, setBanner] = useState(false);

  const size = useWindowSize();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  // envio de pedido / suuporte por telefone / mensagens notifications / meios de comunicaco que utilizam diariamente / varios dispositivos / chat bots / agentes / whatsapp / facebook / messenger / instagram / telegram / sms

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
      <Flex
        flexDir="column"
        pt="5"
        mx="auto"
        w={size.width - 50}
        maxWidth={1000}
      >
        <Text
          color="#333"
          fontWeight="bold"
          fontSize={isWideVersion ? "4xl" : "3xl"}
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
          _hover={{
            opacity: 0.8
          }}
          cursor="pointer"
          mt="4"
          borderRadius="5"
          bg="#F00066"
          justify="center"
          align="center"
          style={{ height: 50, width: 200 }}
        >
          <Text color="#FFF" fontWeight="bold">
            Crie seu produto
          <Icon as={MdTouchApp} color="#FFF" fontSize="14" ml="2"/>
          </Text>
        </Flex>
        <Flex mt="10" justify="center" align="center">
          <Image
            w={size.width - 50}
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
          {/* <ReactPlayer
            muted={playing}
            controls={false}
            playing={playing}
            config={{
              file: {
                attributes: { preload: "auto" },
                forceAudio: true,
              },
            }}
            style={{
              borderRadius: "5px !important",
            }}
            height={500}
            width={size.width}
            url="https://www.youtube.com/watch?v=cvb49-Csq1o"
          />
          <Flex
            onClick={() => {
              !playing && setPlaying(true);
            }}
            cursor={!playing && "pointer"}
            zIndex="5"
            p="5"
            style={{
              borderRadius: "5px !important",
              maxWidth: 1000,
              width: size.width - 50,
              height: 500,
            }}
            justify="flex-start"
            align="flex-end"
            position="absolute"
            bg="rgba(0,0,0, 0.5)"
          >
            <Icon
              onClick={() => setPlaying(!playing)}
              cursor="pointer"
              as={playing ? RiPauseFill : RiPlayFill}
              fontSize="50"
            />
          </Flex> */}
        </Flex>
      </Flex>
    );
  }

  function Marketplace() {
    return (
      <Flex
        flexDir="column"
        borderRadius="5"
        p="7"
        py={isWideVersion ? "20" : "10"}
        mt="10"
        mx="auto"
        bg="#000"
        justify="center"
        align="center"
        w={size.width - 50}
        maxWidth={1000}
      >
        <Text
          color="#FFF"
          textAlign="center"
          w="100%"
          fontWeight="bold"
          fontSize={isWideVersion ? "5xl" : "5xl"}
        >
          {isWideVersion ? "A melhor comunidade" : "Comunidade"}
        </Text>
        <Text
          mt={isWideVersion ? "4" : "2"}
          color="#FFF"
          textAlign="center"
          fontSize={isWideVersion ? "md" : "sm"}
          w="100%"
        >
          Conecte-se com criadores de conteudo, explore por novos produtos e um
          mundo de oportunidades.
        </Text>
        <Flex
          cursor="pointer"
          mt="10"
          borderRadius="5"
          bg="#F00066"
          justify="center"
          align="center"
          style={{ height: 50, width: isWideVersion ? "50%" : "100%" }}
        >
          <Text color="#FFF" fontWeight="bold">
            Acessar comunidade
          </Text>
        </Flex>
      </Flex>
    );
  }

  function Dashboard() {
    return (
      <Flex
        borderRadius="5"
        px="5"
        pt="5"
        bg="#777"
        mt="10"
        w={size.width - 50}
        maxW={1000}
        mx="auto"
      >
        {isWideVersion && (
          <Image
            src="https://github.com/ricardofsdomene.png"
            borderRadius="5"
            mb="5"
            style={{ height: 350, width: size.width / 2 - 50 }}
          />
        )}
        <Flex
          flexDir="column"
          px={isWideVersion && "5"}
          pb="5"
          justify="space-between"
        >
          <Text
            color="#FFF"
            fontWeight="bold"
            fontSize={isWideVersion ? "3xl" : "xl"}
          >
            Sem códigos. Sem integrações quebradas. Sem mensalidades. Apenas uma
            porcentagem quando você vende.
          </Text>
          <Flex
            fontWeight="bold"
            color="#333"
            _hover={{
              backgroundColor: "#555",
              transition: "0.2s",
              color: "#FFF",
            }}
            mt="4"
            cursor="pointer"
            justify="center"
            align="center"
            bg="#FFF"
            style={{ width: "100%", height: 50 }}
            borderRadius="5"
          >
            Criar meu site
          </Flex>
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
        w={size.width - 50}
        maxWidth={1000}
        boxShadow="rgba(0,0,0,0.1) 0 0 10px"
      >
        <Text color="#000" fontSize="sm">
          Termos e Politicas
        </Text>
        <Text mt="4" color="#555" fontSize="sm">
          uppernodes — 2022 © Todos os direitos reservados
        </Text>
        <Text mt="4" color="#555" fontSize="sm">
          uppernodes co.
          <Text color="#555" fontSize="sm">
            CNPJ nº. 11.233.455/0000-22
          </Text>
          <Text color="#555" fontSize="sm">
            Contato: uppernodes@gmail.com
          </Text>
        </Text>
      </Flex>
    );
  }

  function FAQ() {
    return (
      <Flex my="10" maxW={1000} w={size.width - 50} borderRadius="5" mx="auto">
        <Accordion bg="#333" w="100%" borderRadius="5">
          <AccordionItem py="5" borderRadius="5">
            <h2>
              <AccordionButton
                borderRadius="5"
                outline="none !important"
                boxShadow="none !important"
              >
                <Flex flexDir="column" w="100%">
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Qual servico a uppernodes oferece?
                  </Box>
                  <Box flex="1" textAlign="left" fontSize="md">
                    1 minuto de leitura
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Somos uma plataforma completa. Do suporte ao cliente, passando por
              dados, relatórios e sistema de pagamento, nós vamos cobrir tudo!
              Todas as nossas soluções são criadas e pensadas para os nossos
              clientes. E nossos desenvolvedores nunca param! Novas ferramentas
              são criadas e otimizadas o tempo todo, acompanhando as tendências
              do mercado e o crescimento do seu negócio!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py="5" border="0px solid transparent" borderRadius="5">
            <h2>
              <AccordionButton
                borderRadius="5"
                outline="none !important"
                boxShadow="none !important"
              >
                <Flex flexDir="column" w="100%">
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Quanto custa para usar?
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A uppernodes não cobra taxas de adesão e nem mensalidades. Para
              montar todo o seu negócio digital na uppernodes, você não paga
              nada, apenas uma porcentagem por cada venda realizada.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    );
  }

  return (
    <Flex flex="1" flexDir="column">
      <Header />
      {banner && <Banner />}
      <Apresentation />
      <Marketplace />
      <Dashboard />
      <FAQ />
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
