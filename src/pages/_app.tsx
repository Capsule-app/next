import React from "react";
import { AppProps } from "next/app";
import { UserContextProvider } from "../shared-hooks/useUser";
import { MediaContextProvider } from "../shared-hooks/useScreenSize";
import { LanguageProvider } from "../lib/translations";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LanguageProvider>
      <UserContextProvider>
        <MediaContextProvider>
          <Component {...pageProps} />
        </MediaContextProvider>
      </UserContextProvider>
    </LanguageProvider>
  );
};

export default App;
