import React from "react";
// @ts-ignore
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  console.log(cookies.token);

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
            <div
              style={{
                display: cookies.token ? "none" : "block",
              }}
            >
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
            </div>
          </Link>

          <Link href={"/register"}>
            <div
              style={{
                display: cookies.token ? "none" : "block",
              }}
            >
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
            </div>
          </Link>

          <Link href={"/"}>
            <div
              style={{
                display: cookies.token ? "block" : "none",
              }}
              onClick={() => {
                removeCookie("token");
              }}
            >
              <Button
                bgColor={"rgba(60, 82, 50, 0.19)"}
                borderRadius={"27px"}
                w={"126px"}
                h={"46px"}
                fontSize={"23px"}
                fontWeight={"700"}
                color={"textColor.10"}
              >
                Log-out
              </Button>
            </div>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
