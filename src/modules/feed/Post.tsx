import React from "react";
import { PersonCircle } from "react-bootstrap-icons";

interface Post {
  name: string;
  username: string;
  user_picture?: string;
  content: string;
  post_picture?: string;
  url?: string;
  id: string;
}

interface Props {
  post: Post;
}

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <article>
      <header className="flex space-x-1.5">
        {post.user_picture ? (
          <img
            src={post.user_picture}
            alt=""
            width={48}
            height={48}
            className="flex-none"
          />
        ) : (
          <PersonCircle className="text-" width={48} height={48} />
        )}
        <p className="font-bold">{post.name}</p>
      </header>
    </article>
  );
};
