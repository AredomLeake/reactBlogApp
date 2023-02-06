import React from "react";
import { Link } from "react-router-dom";
const post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postdate">{post.datetime}</p>
      </Link>
      <p className="postbody">
        {post.body.length <= 55 ? post.body : `${post.body.slice(0, 55)}... `}
      </p>
    </article>
  );
};

export default post;
