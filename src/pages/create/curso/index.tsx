import {
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiChevronDown, BiListPlus, BiUserPlus } from "react-icons/bi";
import NumberFormat from "react-number-format";
import TopNav from "../../../components/TopNav";

export default function Curso() {
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

  const { onOpen } = useDisclosure();

  function Model() {
    const [number, setNumber] = useState("");
    const [selected, setSelected] = useState("Gratuito");
    const [metodo, setMetodo] = useState("Semanal");

    function Item({ title }) {
      return (
        <Flex
          cursor="pointer"
          mt="2"
          align="center"
          onClick={() => setSelected(title)}
        >
          <Flex
            border="2px solid #000"
            style={{ width: 25, height: 25, borderRadius: 25 }}
            justify="center"
            align="center"
          >
            {selected === title && (
              <Flex
                style={{ height: 15, width: 15 }}
                bg="#000"
                borderRadius="full"
              />
            )}
          </Flex>
          <Text color="#000" ml="2" fontSize="sm" fontWeight="bold">
            {title}
          </Text>
        </Flex>
      );
    }

    return (
      <Flex flexDir="column" pt="4">
        <Flex justify="space-between" w="100%">
          <Flex flexDir="column">
            <Text color="#000" fontSize="lg" fontWeight="bold">
              Adicionar modelo de subscricao
            </Text>
            <Text color="#000" fontSize="sm" mb="4">
              Adicione um nome e selecione o modelo de cobranca
            </Text>
          </Flex>
          <Flex position="absolute" right={4}></Flex>
        </Flex>
        <Input
          mb="4"
          placeholder="Nome do modelo"
          color="#000"
          style={{ width: 200 }}
        />
        <Item title="Gratuito" />
        <Item title="Pago" />
        {selected === "Pago" && (
          <Flex mt="4">
            <Flex flexDir="column" mr="2">
              <Text color="#000" fontWeight="bold">
                Valor
              </Text>
              <NumberFormat
                style={{
                  width: 200,
                  height: 40,
                  borderRadius: 5,
                  border: "2px solid #e0e0e0",
                  fontSize: 18,
                  color: "#000",
                }}
                prefix={"R$"}
                mask=""
                maxLength={6}
                name="phoneNumberInput"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNumber(e.target.value);
                }}
                value={number}
              />
            </Flex>
            <Flex flexDir="column">
              <Text color="#000" fontWeight="bold">
                Metodo
              </Text>
              <Menu>
                <MenuButton
                  bg="#eee"
                  style={{ height: 40, width: 200 }}
                  borderRadius="5"
                  px="3"
                >
                  <Flex align="center" justify="space-between">
                    <Text fontSize="md" cursor="pointer" color="#000">
                      {metodo}
                    </Text>
                    <Icon
                      ml="2"
                      as={BiChevronDown}
                      color="#000"
                      fontSize="14"
                    />
                  </Flex>
                </MenuButton>
                <MenuList zIndex="2" bg="#eee" py="0">
                  <MenuItem
                    justifyContent="space-between"
                    py="4"
                    onClick={() => {
                      setMetodo("Semanal");
                    }}
                    color="#000"
                    fontSize="sm"
                  >
                    Semanal
                  </MenuItem>
                  <MenuItem
                    justifyContent="space-between"
                    py="4"
                    onClick={() => {
                      setMetodo("Mensal");
                    }}
                    color="#000"
                    fontSize="sm"
                  >
                    Mensal
                  </MenuItem>
                  <MenuItem
                    justifyContent="space-between"
                    py="4"
                    onClick={() => {
                      setMetodo("Anual");
                    }}
                    color="#000"
                    fontSize="sm"
                  >
                    Anual
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        )}
        <Flex
          _hover={{
            opacity: 0.9,
          }}
          cursor="pointer"
          mt="4"
          justify="center"
          align="center"
          bg="#000"
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#FFF",
            width: 200,
            height: 40,
          }}
          borderRadius="5"
        >
          Adicionar modelo
        </Flex>
      </Flex>
    );
  }

  function Categoria() {
    const [categoria, setCategoria] = useState("Marketing Digital");

    function Item({ title }) {
      return (
        <Flex
          cursor="pointer"
          onClick={() => setCategoria(title)}
          mr="2"
          borderRadius="5"
          style={{ height: 40 }}
          px="4"
          justify="center"
          align="center"
          bg={categoria === title ? "#000" : "#222"}
        >
          <Text color="#FFF" fontSize={size.width > 600 ? "sm" : "xs"}>
            {title}
          </Text>
        </Flex>
      );
    }

    return (
      <>
        <Text mt="4" color="#000" fontWeight="bold">
          Categoria
        </Text>

        <Flex mt="2">
          <Item title="Marketing Digital" />
          <Item title="Programacao" />
          <Item title="Financas" />
        </Flex>
      </>
    );
  }

  function PalavrasChave() {
    return (
      <>
        <Text mt="4" color="#000" fontWeight="bold">
          Palavras-chaves
        </Text>
        <Input
          mt="4"
          style={{
            border: "2px solid #e0e0e0",
            height: 40,
            width: 200,
          }}
          placeholder="Insira uma nova palavra-chave"
        />
        <Flex
          mt="4"
          style={{
            height: 40,
            width: 200,
          }}
          bg="#000"
          borderRadius="5"
          justify="center"
          align="center"
        >
          <Text color="#FFF" fontSize="14" fontWeight="bold">
            Adicionar
          </Text>
        </Flex>
      </>
    );
  }

  return (
    <Flex>
      <TopNav />

      <Flex
        flexDir="column"
        p="4"
        style={{ marginTop: 80 }}
        boxShadow="rgba(0,0,0,0.1) 0 0 10px"
        w="100vw"
      >
        <Text
          mt="4"
          color="#000"
          fontWeight="thin"
          fontFamily="sans-serif"
          fontSize="3xl"
        >
          Criar um novo curso
        </Text>
        <Text color="#000" fontFamily="sans-serif" fontSize="md">
          Um curso e formado por modulos, que por sua vez sao formados por audio
          video e texto.
        </Text>

        <Flex w={size.width - 50} style={{ height: 1 }} bg="#eee" mt="4" />

        <Flex w="100vw" maxW={size.width - 50} mt="4">
          <Flex mr="2" flexDir="column">
            <Text color="#000" fontWeight="bold">
              Instrutor
            </Text>
            <Input placeholder="" color="#000" style={{ width: 150 }} />
          </Flex>
          <Flex flexDir="column">
            <Text color="#000" fontWeight="bold">
              Nome do curso
            </Text>
            <Input placeholder="" color="#000" />
          </Flex>
        </Flex>

        <Flex flexDir="column" mt="4">
          <Text color="#000" fontWeight="bold">
            Descricao (opcional)
          </Text>
          <Input
            placeholder=""
            color="#000"
            style={{ maxWidth: 400, width: size.width - 50 }}
          />
        </Flex>

        <Flex w={size.width - 50} style={{ height: 1 }} bg="#eee" mt="4" />

        <Categoria />

        <Flex w={size.width - 50} style={{ height: 1 }} bg="#eee" mt="4" />

        <PalavrasChave />

        <Flex w={size.width - 50} style={{ height: 1 }} bg="#eee" mt="4" />

        <Model />

        <div style={{ height: 70 }} />
      </Flex>
      <Flex
        position="fixed"
        justify="center"
        align="center"
        bottom={0}
        boxShadow="rgba(0,0,0,0.1) 0 0 10px"
        w="100vw"
        cursor="pointer"
        bg="#FFF"
        
        style={{
          height: 70,
        }}
      >
        <Text color="#000" fontWeight="bold">Adicionar curso</Text>
      </Flex>
    </Flex>
  );
}
