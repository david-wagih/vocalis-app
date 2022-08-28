import React from "react";
import { Box, Flex, Text, Button, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Flex
        mt={"170px"}
        justifyContent={"space-around"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Link href={"/"}>
            <Image src={"/VocalisLOGO.png"} width={"135px"} height={"125px"} />
          </Link>
          <Text
            pl={"200px"}
            pt={"40px"}
            fontWeight={"700"}
            fontSize={"48px"}
            color={"textColor.10"}
            w={"800px"}
          >
            Get started now so you can become a better speaker. Join Vocalis
            today!
          </Text>
        </Box>
        <Flex pr={"200px"} flexDirection={"column"} alignItems={"center"}>
          <Text fontWeight={"700"} fontSize={"48px"} color={"textColor.10"}>
            Sign up
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
              placeholder="Full Name"
            />
            <input
              className="login-input"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Confirm Password"
            />
            <Button
              type="submit"
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
              Sign up
            </Button>
            <Text fontWeight={"600"} fontSize={"18px"} color={"textColor.10"}>
              Already have an account?
              <chakra.span
                transition={"all 0.2s ease-in-out"}
                pl={"10px"}
                color={"primary.50"}
                textDecoration={"underline"}
                _hover={{ color: "textColor.200" }}
              >
                <Link href={"/login"}>Sign in</Link>
              </chakra.span>
            </Text>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
