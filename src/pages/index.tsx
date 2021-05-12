import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { HomePage } from "../modules/feed/HomePage";
import { UserContext } from "../shared-hooks/useUser";
import axios from "axios";

const Home: React.FC = () => {
  const cur = useContext(UserContext);

  const { data, status } = useQuery("auth", async () => {
    return await axios
      .get(`${process.env.API_URL}user/2786d37e-e134-4930-94bf-a9ea913111ed`)
      .then((res) => res.data);
  });

  useEffect(() => {
    cur.setUser({ ...data, isLoading: status === "loading" });
  }, [data]);

  return <HomePage />;
};

export default Home;
