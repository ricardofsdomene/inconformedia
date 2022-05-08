import {
  Avatar,
  Button,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Stat,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiListPlus, BiUserPlus } from "react-icons/bi";
import { FiChevronDown, FiPlusSquare } from "react-icons/fi";
import {
  RiArrowDropDownFill,
  RiMenuLine,
  RiNotification2Line,
} from "react-icons/ri";

export default function Landing() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const route = useRouter();

  const [publicacao, setPublicacao] = useState(false);
  const [curso, setCurso] = useState(false);

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

  function Dashboard() {
    return (
      <>
        <Flex mt="4" flexDir="row" justify="space-between" alignItems="center">
          <Text color="#000" fontWeight="bold" mt="4" fontSize="2xl">
            Dashboard
          </Text>
          <Menu>
            <MenuButton mt="4" style={{ height: 40 }}>
              <Flex
                flexDir="row"
                borderRadius="5"
                justify="center"
                align="center"
                style={{ width: 100, height: 40 }}
                bg="#FFF"
              >
                <Text color="#555">7 dias</Text>
                <Icon as={FiChevronDown} fontSize="16" color="#555" ml="2" />
              </Flex>
            </MenuButton>
            <MenuList bg="#FFF" py="0">
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                14 dias
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
                30 dias
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
                Histórico
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          flexDir="column"
          mt="4"
          p="4"
          borderRadius="12"
          bg="#FFF"
          width="100%"
        >
          <Flex borderRadius="12" bg="#FFF" width="100%">
            <StatGroup
              flexDir="row"
              justifyContent="space-between"
              width="100vw"
            >
              <Stat>
                <StatLabel color="#000" fontSize="md">
                  Assinaturas
                </StatLabel>
                <StatNumber color="#333">345</StatNumber>
                <StatHelpText color="#333">
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color="#000" fontSize="md">
                  Faturamento
                </StatLabel>
                <StatNumber color="#333">50.715</StatNumber>
                <StatHelpText color="#333">
                  <StatArrow type="increase" />
                  18.36%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel color="#000" fontSize="md">
                  Assinantes
                </StatLabel>
                <StatNumber color="#333">345</StatNumber>
                <StatHelpText color="#333">
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Flex>

          <Flex
            justify="space-between"
            align="flex-end"
            pb="4"
            borderBottom="1px solid #e3e3e3"
          >
            <Text color="#333" mt="4">
              Envie para{" "}
              <div style={{ fontWeight: "bold" }}>345 novos assinantes</div>
              uma mensagem privada.
            </Text>
            <Flex
              style={{ height: 40 }}
              px="4"
              cursor="pointer"
              flexDir="row"
              bg="#FFF"
              border="1px solid #BBB"
              justify="center"
              align="center"
              borderRadius="5"
            >
              <Text color="#333" fontWeight="bold">
                Enviar
              </Text>
            </Flex>
          </Flex>

          <Flex justify="space-between" align="flex-end" pb="1">
            <Text color="#333" mt="4">
              <div style={{ fontWeight: "bold" }}>R$8.425,45</div>
              Disponível para retirada
            </Text>
            <Flex
              style={{ height: 40 }}
              px="4"
              cursor="pointer"
              flexDir="row"
              bg="#FFF"
              border="1px solid #BBB"
              justify="center"
              align="center"
              borderRadius="5"
            >
              <Text color="#333" fontWeight="bold">
                Retirar
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }

  function Banner() {
    return (
      <Flex
        mt="6"
        flexDir="column"
        style={{ height: 200, width: "100%" }}
        bg="#FFF"
        p="4"
        borderRadius="12"
      >
        <Text color="#000" fontWeight="bold" fontSize="2xl">
          Está na hora de monetizar
        </Text>
        <Text color="#000" fontSize="md">
          Um software desenvolvido para quem deseja monetizar o seu conteúdo.
        </Text>
        <Text color="#000" fontSize="md">
          Uma maneira simples de vender.
        </Text>
        <Flex flexDir="row" align="center" justify="space-between">
          <Flex
            onClick={() => [onOpen()]}
            cursor="pointer"
            mt="4"
            borderRadius="5"
            style={{ height: 40, width: 200 }}
            bg="#333"
            justifyContent="center"
            alignItems="center"
            p="3"
          >
            <Text color="#FFF">Criar conteudo</Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Products() {
    const products = [
      {
        avatar: "https://github.com/0xrfsd.png",
        faturamento: 120000,
        title: "Desenvolvimento web",
      },
      {
        avatar: "https://github.com/ricardofsdomene.png",
        faturamento: 200000,
        title: "Desenvolvimento Mobile",
      },
    ];

    return (
      <>
        <Flex mt="4" flexDir="row" justify="space-between" alignItems="center">
          <Text color="#000" fontWeight="bold" mt="4" fontSize="2xl">
            Produtos
          </Text>
          <Menu>
            <MenuButton mt="4" style={{ height: 40 }}>
              <Flex
                flexDir="row"
                borderRadius="5"
                justify="center"
                align="center"
                style={{ width: 100, height: 40 }}
                bg="#FFF"
              >
                <Text color="#555">7 dias</Text>
                <Icon as={FiChevronDown} fontSize="16" color="#555" ml="2" />
              </Flex>
            </MenuButton>
            <MenuList bg="#FFF" py="0">
              <MenuItem
                justifyContent="space-between"
                py="4"
                onClick={() => {
                  onOpen();
                }}
                color="#333"
                fontSize="sm"
              >
                14 dias
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
                30 dias
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
                Histórico
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex flexDir="column" mt="4" bg="#FFF" borderRadius="5" p="4">
          <Flex justify="space-between" w="100%" pb="3">
            <Text color="#333">Produtos</Text>
            <Text color="#333">Receita</Text>
          </Flex>
          <div style={{ height: 1, width: "100%", backgroundColor: "#eee" }} />
          <Flex flexDir="column" justify="space-between">
            {products.map((product, i) => {
              return (
                <Flex
                  py="4"
                  align="center"
                  justify="space-between"
                  borderBottom={i !== products.length - 1 && "1px solid #eee"}
                  pb={i !== products.length - 1 && "3"}
                >
                  <Flex align="center">
                    <Image
                      borderRadius="5"
                      src={product.avatar}
                      style={{ height: 50, width: 50 }}
                      mr="2"
                    />
                    <Text color="#333" fontSize="sm">
                      {product.title}
                    </Text>
                  </Flex>
                  <Text color="#333" fontSize="md" fontWeight="bold">
                    R${product.faturamento}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex bg="#333" w="100%" mt="5" borderRadius="5" justify="center" align="center" p="4">
            <Text color="#FFF" fontWeight="bold">Todos os produtos</Text>
          </Flex>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Header />
      <Flex flexDir="column" style={{ paddingTop: 80 }} p="4" bg="#eee">
        {!isWideVersion && (
          <>
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
              <Text
                color="#333"
                textDecorationLine={
                  route.pathname === "/landing" ? "underline" : "none"
                }
              >
                Dashboard
              </Text>
              <Text color="#333" cursor="pointer">
                Produtos
              </Text>
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
            <Flex align="center" justify="space-between">
              <Flex flexDir="column">
                <Text mt="5" color="#333" fontSize="md">
                  Boa noite
                </Text>
                <Text color="#000" fontWeight="bold" fontSize="3xl">
                  Ricardo
                </Text>
              </Flex>
              <Text fontSize="4xl" mt="4" ml="4">
                👋
              </Text>
            </Flex>
            <Banner />
            <Dashboard />
            <Products />
          </>
        )}
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#333" />

          <DrawerBody pb="4" maxWidth={"100%"} width={600} mx="auto">
            <Text my="2" color="#333" fontWeight="bold" fontSize={22}>
              Adicionar
            </Text>
            <Flex mt="4" flexDir="row" width="100%" justify="space-between">
              <Flex
                onClick={() => {
                  if (curso) {
                    setCurso(!curso);
                    setPublicacao(!publicacao);
                  } else {
                    setPublicacao(!publicacao);
                  }
                }}
                cursor="pointer"
                flexDir="row"
                bg={publicacao ? "#e0e0e0" : "#eee"}
                justify="center"
                align="center"
                borderRadius="5"
                p="4"
                style={{ height: 65 }}
                w="49%"
              >
                <Text
                  color={publicacao ? "#5595FC" : "#9FB5FC"}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Publicação
                </Text>
              </Flex>
              <Flex
                onClick={() => {
                  if (publicacao) {
                    setPublicacao(!publicacao);
                    setCurso(!curso);
                  } else {
                    setCurso(!curso);
                  }
                }}
                cursor="pointer"
                flexDir="row"
                bg={curso ? "#e0e0e0" : "#eee"}
                justify="center"
                align="center"
                borderRadius="5"
                p="4"
                style={{ height: 65 }}
                w="49%"
              >
                <Text
                  color={curso ? "#EA9B7E" : "#E99B7E"}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Curso
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt="2"
              onClick={() => {
                if (publicacao) {
                  setPublicacao(!publicacao);
                  setCurso(!curso);
                } else {
                  setCurso(!curso);
                }
              }}
              cursor="pointer"
              flexDir="row"
              bg={curso ? "#e0e0e0" : "#eee"}
              justify="center"
              align="center"
              borderRadius="5"
              p="4"
              style={{ height: 65 }}
              w="100%"
            >
              <Text
                color="gray.600"
                fontSize="lg"
                fontWeight="bold"
              >
                Produto
              </Text>
            </Flex>
            {publicacao && (
              <>
                <Flex mt="4" borderRadius="5" h="200" bg="#eee">
                  <Text color="#333">Titulo</Text>
                </Flex>
              </>
            )}
            {curso && (
              <>
                <Flex mt="4" borderRadius="5" h="200" bg="#eee">
                  <Text color="#333">Nome do curso</Text>
                </Flex>
              </>
            )}
          </DrawerBody>

          {publicacao && (
            <DrawerFooter>
              <Flex
                flexDir="row"
                w="100%"
                style={{ height: 50 }}
                borderRadius="5"
                bg="#333"
                justify="center"
                align="center"
              >
                <Text color="#FFF" fontWeight="bold">
                  Adicionar
                </Text>
              </Flex>
            </DrawerFooter>
          )}
          {curso && (
            <DrawerFooter>
              <Flex
                flexDir="row"
                w="100%"
                style={{ height: 50 }}
                borderRadius="5"
                bg="#333"
                justify="center"
                align="center"
              >
                <Text color="#FFF" fontWeight="bold">
                  Adicionar
                </Text>
              </Flex>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
