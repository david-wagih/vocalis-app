import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import react from "React";
import { Box, Text, Flex } from "@chakra-ui/react";

export default function solution() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vocalis | solution</title>
        <meta
          name="description"
          content="Analyze your speech and become a better public speaker"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <DropZone />
        <Flex alignItems={"center"} flexDirection={"column"}>
          <Text color={"#000"} fontSize={"64px"} fontWeight={"600"}>
            Page Analytics
          </Text>
          <Box
            mt={"30px"}
            py={"10px"}
            w={"600px"}
            h={"auto"}
            bgColor={"rgba(60, 82, 50, 0.19)"}
            borderRadius={"17px"}
            border={"1px solid #283A20"}
          ></Box>
        </Flex>
      </Box>
    </div>
  );
}
