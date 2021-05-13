import React from "react";

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
    <article className="space-y-2">
      <header className="flex space-x-2">
        {post.user_picture ? (
          <img
            src={post.user_picture}
            alt=""
            className="w-6.5 h-6.5 rounded-full flex-none select-none"
          />
        ) : (
          <img
            src="/default-profile.png"
            alt=""
            className="w-6.5 h-6.5 rounded-full flex-none select-none"
          />
        )}
        <div>
          <p className="font-bold">{post.name}</p>
          <p className="text-primary-300 -mt-1">@{post.username}</p>
        </div>
      </header>
      <section>
        <p className="break-words">{post.content}</p>
      </section>
    </article>
  );
};
