import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Flex ml={"110px"} alignItems={"end"}>
        <Flex flexDirection={"column"}>
          <Text
            w={"460px"}
            h={"230px"}
            fontWeight={"700"}
            fontSize={"96px"}
            color={"#000"}
            lineHeight={"100px"}
          >
            One app the world loves.
          </Text>
          <Text
            color={"#000"}
            fontWeight={"600"}
            fontSize={"20px"}
            w={"430px"}
            h={"100px"}
          >
            Start analyzing your school presentation, business meeting, or
            regular conversation. Let us become a better public speaker
          </Text>
          <Link href={"/solution"}>
            <Button
              transition={"all 0.3s ease-in-out"}
              variant={"unstyled"}
              _hover={{ bgColor: "primary.200" }}
              w={"172px"}
              h={"51px"}
              bgColor={"#4F6246"}
              borderRadius={"14px"}
              mt={"40px"}
              color={"quaternary"}
              fontWeight={"600"}
              fontSize={"20px"}
            >
              Get Started
            </Button>
          </Link>
        </Flex>
        <Box pt={"0px"} pl={"400px"} display={{ base: "none", lg: "block" }}>
          <Image
            alt="hero"
            className="hero-image"
            src={"/Hero-image.png"}
            width={"650px"}
            height={"708.58px"}
          />
        </Box>
      </Flex>
      <Box
        mt={"150px"}
        w={"99vw"}
        h={"1px"}
        border={" 1px dotted"}
        bgColor={"#9f9f9f"}
      ></Box>
    </>
  );
}
