import Head from "next/head";
import styles from "../styles/Home.module.css";
// @ts-ignore
import {
  Box,
  Text,
  Flex,
  chakra,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
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
  const [isClicked, setIsClicked] = useState(false);
  const handleUpload = async () => {
    setIsClicked(true);
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
          <Button
            variant={"outline"}
            colorScheme={"cyan"}
            width={"140px"}
            height={"45px"}
            mt={"40px"}
            mb={"40px"}
            onClick={handleUpload}
            isDisabled={isClicked}
          >
            Analyze
          </Button>
          {isClicked && analytics === undefined && <Spinner color="#000" />}
          <Text color={"#000"} fontSize={"64px"} fontWeight={"600"}>
            Page Analytics
          </Text>
          {isClicked && analytics && (
            <Box
              mt={"30px"}
              mb={"90px"}
              py={"10px"}
              w={"600px"}
              h={"auto"}
              bgColor={"rgba(60, 82, 50, 0.19)"}
              borderRadius={"17px"}
              border={"1px solid #283A20"}
            >
              <Text
                fontSize={"18px"}
                px={"20px"}
                color={"#000"}
                lineHeight={"30px"}
              >
                <Text>
                  <Heading>WPM</Heading>
                  {analytics?.wpm[0]} Words Per Minute {"- "}{" "}
                  {analytics?.wpm[1]}!
                </Text>
                {/* {analytics?.wpm.map((i) => {
                return (
                  <Text key={i} fontWeight={"600"}>
                    {i}
                  </Text>
                );
              })} */}
                <hr />
                <br />
                <Heading display={"flex"}>Talk Time</Heading>
                {analytics?.talkTime} seconds of talk time
                <br />
                {analytics?.silenceTime} seconds of silence time
                <br />
                {analytics?.talkToSilence} seconds of talk to silence time
                <br />
                {/* {analytics?.transcript.map((i) => {
                return (
                  <div key={i.key}>
                    <Text fontWeight={"600"}>{i.transcript}</Text>
                  </div>
                );
              })} */}
                <br />
                <Heading display={"flex"}>Summary</Heading>
                {analytics?.summary[0]}
                <br />
                {/* {analytics?.summary.map((i) => {
                return (
                  <div key={i.key}>
                    <Text fontWeight={"600"}>{i.summary}</Text>
                  </div>
                );
              })} */}
                <Heading display={"flex"}>Topics</Heading>
                {analytics?.topics.map((i) => {
                  return (
                    <div key={i.key}>
                      <chakra.li fontWeight={"600"}>{i}</chakra.li>
                    </div>
                  );
                })}
                <br />
                <Heading display={"flex"}>Filler Words</Heading>
                {/* {analytics?.fillerWords.map((i) => {
                return (
                  <div key={i.key}>
                    <chakra.li fontWeight={"600"}>{i}</chakra.li>
                  </div>
                );
              })} */}
                {analytics?.fillerWords[0]} Filler words out of{" "}
                {analytics?.fillerWords[1]}
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
    </div>
  );
}
