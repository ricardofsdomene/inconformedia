import { Flex, Icon, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseFill, RiUserLine } from "react-icons/ri";

export default function Header() {
  const [menu, setMenu] = useState(false);

  // LUMCuagNtbEyvS4 mdb
  // dimitrious mdb.user
  // rXK9z3eU9MZbhPRE mdb.password

  return (
    <>
      {menu && (
        <Flex
          zIndex="2"
          position="absolute"
          h="calc(100vh - 80px)"
          style={{ marginTop: 80 }}
          w="100vw"
          boxShadow="rgba(0,0,0,0.1) 0 0 10px"
          bg="#FFF"
        ></Flex>
      )}
      <Flex align="center" px="4" bg="#fafafa" w="100vw" style={{ height: 80 }}>
        <Flex justify="space-between" w="100%" mx="auto" maxW={1000}>
          <Flex align="center">
            <Image
              src="https://a174-2804-14c-3f89-8b76-e362-b2de-f80b-8737.sa.ngrok.io/images/inconformedia.png"
              w="45"
              h="45"
              mr="2"
            />
            <Text fontWeight="bold" color="#000">
              uppernodes
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={RiUserLine} cursor="pointer" color="#000" fontSize="20" />
            <Link href="/auth/signup">
              <Flex
                cursor="pointer"
                bg="#F00066"
                px="4"
                py="2"
                ml="4"
                borderRadius="5"
                justify="center"
                align="center"
              >
                <Text color="#FFF" fontSize="14" fontWeight="bold">
                  Entrar
                </Text>
              </Flex>
            </Link>
            <Flex
              onClick={() => setMenu(!menu)}
              justify="center"
              align="center"
              flexDir="column"
              ml="4"
            >
              {menu ? (
                <Icon as={RiCloseFill} color="#000" fontSize="20" />
              ) : (
                <>
                  <div
                    style={{ height: 2, width: 20, backgroundColor: "#000" }}
                  />
                  <div
                    style={{
                      height: 2,
                      width: 20,
                      marginTop: 5,
                      backgroundColor: "#000",
                    }}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
