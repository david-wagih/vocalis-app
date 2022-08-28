import React from "react";
import { Box, Flex, Text, Button, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Flex
        mt={"170px"}
        justifyContent={"space-around"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Image src={"/VocalisLOGO.png"} width={"135px"} height={"125px"} />
          <Text
            pl={"200px"}
            pt={"40px"}
            fontWeight={"700"}
            fontSize={"48px"}
            color={"textColor.10"}
            w={"700px"}
          >
            Welcome back! Let's get better together
          </Text>
        </Box>
        <Flex pr={"200px"} flexDirection={"column"} alignItems={"center"}>
          <Text fontWeight={"700"} fontSize={"48px"} color={"textColor.10"}>
            Log in
          </Text>
          <Box
            borderBottom={"1px dotted"}
            color={"textColor.10"}
            w={"300px"}
            pb={"20px"}
          ></Box>
          <form action="submit">
            <Text
              mt={"40px"}
              fontWeight={"700"}
              fontSize={"18px"}
              color={"textColor.10"}
              opacity={"70%"}
            >
              Login with your email address
            </Text>
            <input
              className="login-input"
              type="text"
              placeholder="Email Address"
            />
            <input className="login-input" type="text" placeholder="Password" />
            <Button
              variant={"unstyled"}
              _hover={{ bg: "primary.100", color: "white" }}
              w={"398px"}
              h={"46px"}
              background={"primary.50"}
              borderRadius={"6px"}
              fontSize={"18px"}
              fontWeight={"800"}
              transition={"all 0.2s ease-in-out"}
            >
              Log in
            </Button>
            <Text fontWeight={"600"} fontSize={"18px"} color={"textColor.10"}>
              Don't have an account?
              <chakra.span
                transition={"all 0.2s ease-in-out"}
                pl={"10px"}
                color={"primary.50"}
                textDecoration={"underline"}
                _hover={{ color: "textColor.200" }}
              >
                <Link href={"/register"}>Create One</Link>
              </chakra.span>
            </Text>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
