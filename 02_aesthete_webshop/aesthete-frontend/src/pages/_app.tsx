import WebappHead from "@/components/head/webapp-head";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
