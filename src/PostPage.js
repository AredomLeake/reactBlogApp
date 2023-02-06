import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="home">
      <article className="postpage">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h4>No posts available</h4>
            <p> well that is disponting</p>
            <p>
              <i>
                <Link to="/">Visist our home page</Link>
              </i>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
