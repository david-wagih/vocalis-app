import React from "react";
import Navbar from "../components/header";
import { Flex, Box, Text, Button, chakra, Image, Link } from "@chakra-ui/react";

export default function contact() {
  return (
    <>
      <Navbar />
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
            Contact us at anytime. We are here to help you.
          </Text>
        </Box>
        <Flex pr={"200px"} flexDirection={"column"} alignItems={"center"}>
          <Text fontWeight={"700"} fontSize={"48px"} color={"textColor.10"}>
            Contact Us
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
              Ask us anything that concerns you.
            </Text>
            <input className="login-input" type="text" placeholder="Subject" />
            <textarea
              className="login-input"
              name="description"
              id="description"
              placeholder="Tell us anything..."
            ></textarea>
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
              Submit
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
