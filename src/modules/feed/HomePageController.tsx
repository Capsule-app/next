import React from "react";
import { Header } from "./Header";
import { Post } from "./Post";

const data = [
  {
    name: "Alex",
    username: "alex",
    user_picture: "/me.png", //https://pbs.twimg.com/profile_images/1391474130780819459/ciGtE2k5_400x400.jpg
    content: "Whoa this site is super clean! Love the new design.",
    url: "",
    post_picture: "",
    id: "123",
  },
  {
    name: "Lorem",
    username: "Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "12345",
  },
  {
    name: "Lorem",
    username: "Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "123455",
  },
  {
    name: "Lorem",
    username: "Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "123456",
  },
];

export const HomePageController: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-2 m:mt-0 space-y-3">
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
