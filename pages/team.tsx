import React from "react";
import { Flex, Box, Text, Button, chakra, Image, Link } from "@chakra-ui/react";
import Navbar from "../components/header";

type Person = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const people: Person[] = [
  {
    name: "Pranith Molakalapalli",
    description: "Web Developer",
    image: "/al.jpg",
    link: "https://github.com/prantantheman",
  },
  {
    name: "David Wagih",
    description: "Fullstack Developer",
    image: "/DavidWagih.png",
    link: "https://github.com/david-wagih",
  },
  {
    name: "Nakul Nayak",
    description: "Back-End Developer",
    image: "/Nakul.jpg",
    link: "https://github.com/nnayk",
  },
  {
    name: "Rayido",
    description: "Web3 Developer",
    image: "/Rayido.jpg",
    link: "https://github.com/rayido",
  },
];

export default function team() {
  return (
    <>
      <Navbar />
      <Flex alignItems={"center"} flexDirection={"column"}>
        <Text fontSize={"72px"} fontWeight={"700"} color={"#000"}>
          Meet the Team
        </Text>
        <Box
          w={"140px"}
          h={"5px"}
          bgColor={"#000"}
          transform={"auto"}
          skewX={"-45deg"}
          className={"gradient-bar"}
        ></Box>
      </Flex>
      <Box className="card-wrapper">
        {people.map((member) => {
          return (
            <Box className="card">
              <Flex justifyContent={"center"} pt={"44px"} pb={"22px"}>
                <Image
                  className="team-img"
                  src={member.image}
                  width={"162px"}
                  height={"143px"}
                />
              </Flex>
              <Flex alignItems={"center"} flexDirection={"column"}>
                <Link href={member.link} target={"_blank"}>
                  <Text
                    fontWeight={"700"}
                    fontSize={"40px"}
                    fontStyle={"normal"}
                    transition={"all 0.5s ease-in-out"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {member.name}
                  </Text>
                </Link>
                <Text fontWeight={"700"} fontSize={"20px"} fontStyle={"normal"}>
                  {member.description}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
