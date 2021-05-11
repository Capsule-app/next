import React from "react";
import Head from "next/head";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { HomePageController } from "./HomePageController";

export const HomePage: React.FC = () => {
  return (
    <DefaultDesktopLayout>
      <Head>
        <title>Your Feed | Capsule</title>
      </Head>
      <HomePageController />
    </DefaultDesktopLayout>
  );
};
