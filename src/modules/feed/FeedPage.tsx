import React, { useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../../shared-hooks/useUser";
import axios from "axios";
import Head from "next/head";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { FeedPageController } from "./FeedPageController";
import { WaitForAuth } from "../auth/waitForAuth";

export const FeedPage: React.FC = () => {
  const cur = useContext(UserContext);

  const { data, status } = useQuery("auth", async () => {
    const headers = { authToken: localStorage.getItem("token") };
    return await axios
      .get(`${process.env.API_URL}auth/`, {
        headers: headers,
      })
      .then((res) => res.data);
  });

  useEffect(() => {
    cur.setUser({ ...data, isLoading: status === "loading" });
  }, [data]);

  return (
    <WaitForAuth>
      <DefaultDesktopLayout>
        <Head>
          <title>Your Feed | Capsule</title>
        </Head>
        <FeedPageController />
      </DefaultDesktopLayout>
    </WaitForAuth>
  );
};
