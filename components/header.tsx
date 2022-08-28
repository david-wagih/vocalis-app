import React from "react";
// @ts-ignore
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"27px 110px"}
      >
        <Flex alignItems={"center"} gap={"36px"}>
          <Link href={"/"}>
            <Box>
              <Image
                alt=""
                src={"/VocalisLOGO.png"}
                width={"64px"}
                height={"64px"}
              />
            </Box>
          </Link>
          <Link href={"#features"}>
            <Button
              variant={"unstyled"}
              color={"textColor.10"}
              fontWeight={"700"}
              fontSize={"21px"}
              _hover={{ bgColor: "rgba(0, 0, 0, 0.05)" }}
              w={"100px"}
            >
              Features
            </Button>
          </Link>
          <Link href={"/solution"}>
            <Button
              variant={"unstyled"}
              color={"textColor.10"}
              fontWeight={"700"}
              fontSize={"21px"}
              _hover={{ bgColor: "rgba(0, 0, 0, 0.05)" }}
              w={"100px"}
            >
              Solution
            </Button>
          </Link>
          <Link href={"/team"}>
            <Button
              variant={"unstyled"}
              color={"textColor.10"}
              fontWeight={"700"}
              fontSize={"21px"}
              _hover={{ bgColor: "rgba(0, 0, 0, 0.05)" }}
              w={"100px"}
            >
              Team
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              variant={"unstyled"}
              color={"textColor.10"}
              fontWeight={"700"}
              fontSize={"21px"}
              _hover={{ bgColor: "rgba(0, 0, 0, 0.05)" }}
              w={"100px"}
            >
              Contact
            </Button>
          </Link>
        </Flex>
        <Flex gap={"34px"}>
          <Link href={"/login"}>
            <Button
              bgColor={"rgba(60, 82, 50, 0.19)"}
              borderRadius={"27px"}
              w={"126px"}
              h={"46px"}
              fontSize={"23px"}
              fontWeight={"700"}
              color={"textColor.10"}
            >
              Log-in
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button
              bgColor={"#283A20"}
              borderRadius={"27px"}
              w={"126px"}
              h={"46px"}
              fontSize={"23px"}
              fontWeight={"700"}
              color={"quaternary"}
            >
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
