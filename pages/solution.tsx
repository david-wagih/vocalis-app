import Head from "next/head";
import styles from "../styles/Home.module.css";
// @ts-ignore
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/header";
import { useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { getData } from "../services/speechAnalytics";
import { Analytics } from "../@types/analytics";

// @ts-ignore
export default function Solution(props) {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles: any) => {
    setFiles(incommingFiles);
  };

  // todo : this is the state that needs to be shown to the user in the UI
  const [analytics, setAnalytics] = useState<Analytics>();

  const handleUpload = async () => {
    const ourAnalytics: Analytics = await getData();
    setAnalytics(ourAnalytics);
    console.log(ourAnalytics);
  };
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
      <Navbar />
      <Box>
        <Dropzone
          backgroundColor="transparent"
          label="Upload"
          onChange={updateFiles}
          value={files}
          accept=".mp3, .wav"
          footer={false}
          maxFiles={1}
          onClean={() => setFiles([])}
          onUploadFinish={handleUpload}
        >
          {files.map((file) => (
            // @ts-ignore
            <FileItem key={file.id} {...file} preview />
          ))}
        </Dropzone>
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
          >
            {/*
              // todo : here the magic should appear here the data should appear according to the data coming from the server
            */}
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
