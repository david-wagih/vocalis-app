import "../styles/globals.css";
import type { AppProps } from "next/app";
// @ts-ignore
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
