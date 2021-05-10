import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { MediaContextProvider } from "../shared-hooks/useScreenSize";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
};

export default App;
