import "./index.css";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      datetime: "july, 02-02-23",
      body: "lorom ipsum dolor amet  consectetur. adipicising elit",
    },
    {
      id: 2,
      title: "My second post",
      datetime: "september, 02-03-23",
      body: "lorom ipsum amet consectetur. adipicising elit",
    },

    {
      id: 3,
      title: "My third post",
      datetime: "november, 02-01-23",
      body: "lorom ipsum amet consectetur. adipicising elit",
    },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
  };

  return (
    <div className="App">
      <Header title="ReactJS Blog" />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home posts={posts} setPosts={setPosts} />}
        />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          exact
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
