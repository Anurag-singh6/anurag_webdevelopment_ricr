import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

const App = () => {
  const post = [
    { id: 1, title: "First Post", content: "This is the First Post." },
    { id: 2, title: "Second Post", content: "This is the Second Post." },
  ];
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog post={post}/>} />
          <Route
            path="/post/:id"
            element={
              <Post post={{ title: "Sample", content: "Sample content" }} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
