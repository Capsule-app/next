import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../../shared-hooks/useUser";
import { Header } from "./Header";
import { Post } from "./Post";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const HomePageController: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  const { data, status } = useQuery("posts", async () => {
    return await axios
      .post(`${process.env.API_URL}auth/posts`, { id: user ? user.id : "" })
      .then((res) => res.data);
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Header />
      <div className="mt-2 m:mt-0 space-y-3">
        {t("common.search")}
        {data &&
          data.length > 0 &&
          data.map((post: any) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
};
