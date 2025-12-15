import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { CacheProvider } from "@chakra-ui/next-js";

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  if (typeof window === "undefined") return null;

  if (!render) return null;

  return (
    <CacheProvider>
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </CacheProvider>
  );
}
export default App;
