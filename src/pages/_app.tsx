import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { UserContextProvider } from "../shared-hooks/useUser";
import { MediaContextProvider } from "../shared-hooks/useScreenSize";
//import "../i18n";
//import { useTranslation } from "react-i18next";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  //const { ready } = useTranslation("en", { useSuspense: false });

  //if (!ready) return null;
  return (
    <UserContextProvider>
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </UserContextProvider>
  );
};

export default App;
