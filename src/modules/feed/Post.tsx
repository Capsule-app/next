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
  const arr = post.content.split(" ");
  const tags = arr.filter((t) => t.startsWith("#"));

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
        <p className="break-words">
          {post.content.trim().replace(/#(\S+)/gi, "")}
          {tags.map((tag) => (
            <span className="text-gradient bg-gradient-to-r from-secondary-300 to-secondary-100">
              {" " + tag}
            </span>
          ))}
        </p>
      </section>
    </article>
  );
};
