import React from "react";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { Post } from "./Post";

const data = [
  {
    name: "Alex",
    username: "alex",
    user_picture:
      "https://pbs.twimg.com/profile_images/1391474130780819459/ciGtE2k5_400x400.jpg",
    content: "Whoa this site is super clean! Love the new design.",
    url: "",
    post_picture: "",
    id: "123",
  },
];

export const HomePage: React.FC = () => {
  return (
    <DefaultDesktopLayout>
      <h1 className="font-bold text-gradient bg-gradient-to-r from-secondary-300 via-secondary-200 to-secondary-100">
        Welcome
      </h1>
      {data.map((post, index) => (
        <Post post={post} key={index} />
      ))}
      <h2 className="font-bold text-gray-100">100</h2>
      <h2 className="font-bold text-primary-100">100</h2>
      <h2 className="font-bold text-primary-200">200</h2>
      <h2 className="font-bold text-primary-300">300</h2>
      <h2 className="font-bold text-primary-400">400</h2>
      <h2 className="font-bold text-green-100">100</h2>
      <h2 className="font-bold text-green-200">200</h2>
      <h2 className="font-bold text-green-300">300</h2>
      <h2 className="font-bold text-green-400">400</h2>
      <h2 className="font-bold text-red-100">100</h2>
      <h2 className="font-bold text-red-200">200</h2>
      <h2 className="font-bold text-red-300">300</h2>
      <h2 className="font-bold text-red-400">400</h2>
    </DefaultDesktopLayout>
  );
};
