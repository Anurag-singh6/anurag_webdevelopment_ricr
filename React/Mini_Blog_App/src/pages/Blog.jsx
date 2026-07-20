import React from "react";
import { NavLink } from "react-router-dom";

const Blog = ({ post }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>
            <NavLink
              to={`/post/${posts.id}`}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {posts.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
