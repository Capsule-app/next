import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { UserContextProvider } from "../shared-hooks/useUser";
import { MediaContextProvider } from "../shared-hooks/useScreenSize";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </UserContextProvider>
  );
};

export default App;
