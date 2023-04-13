import WebappHead from "@/components/head/webapp-head";
import NavBar from "@/components/navigation/nav-bar";

import "@/styles/globals.css";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/montserrat";
import type { AppProps } from "next/app";

// extent theme with custom fonts
const theme = extendTheme({
  fonts: { heading: `'Inter', sans-serif`, body: `'Montserrat', sans-serif` },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <WebappHead />
        <Flex flexDirection='column'>
          <NavBar />
          <Flex
            flex='1'
            width='100%'
            maxW='1380px'
            padding='70px 24px !important'
            margin='0 auto'
          >
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ChakraProvider>
    </>
  );
}
