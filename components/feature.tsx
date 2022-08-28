import React from "react";
// @ts-ignore
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

type featureDetails = {
  title: string;
  description: string;
  image: string;
};

const features: featureDetails[] = [
  {
    title: "AI/ML Analysis",
    description:
      "Using Machine Learning and AI we've created a tool to thoroughly analyze your speech and voice.",
    image: "/Gears.png",
  },
  {
    title: "Thorough Feedback",
    description:
      "After the analysis the application will do its best to produce feedback that is helpful to you.",
    image: "/texting.png",
  },
  {
    title: "100% Privacy",
    description:
      "your business meetings, conversations, and speeches will all be secured by on a decentralized network.",
    image: "/padlock.png",
  },
  {
    title: "Quick. Easy. Fast.",
    description:
      "Our application will produce feedback and analyze your speech quicklly and easily at a tap of a button.",
    image: "/uploadicon.png",
  },
];
export default function Feature() {
  return (
    <>
      <Flex id="features" alignItems={"center"} flexDirection={"column"}>
        <Text w={"314px"} fontWeight={"600"} fontSize={"96px"} color={"#000"}>
          Features
        </Text>
        <Box w={"143px"} h={"1px"} bgColor={"#000"}></Box>
      </Flex>
      <Box className="card-wrapper">
        {features.map((feature) => {
          return (
            <Box key={feature.title} className="card">
              <Flex justifyContent={"center"} pt={"44px"} pb={"22px"}>
                <Image
<<<<<<< Updated upstream
                  alt=""
=======
                  key={feature.title}
>>>>>>> Stashed changes
                  src={feature.image}
                  width={"162px"}
                  height={"143px"}
                />
              </Flex>
              <Box pl={"33px"}>
                <Text
                  fontWeight={"700"}
                  fontSize={"32px"}
                  fontStyle={"normal"}
                  key={feature.title}
                >
                  {feature.title}
                </Text>
                <Text
                  fontWeight={"700"}
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  w={"261px"}
                  key={feature.title}
                >
                  {feature.description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
