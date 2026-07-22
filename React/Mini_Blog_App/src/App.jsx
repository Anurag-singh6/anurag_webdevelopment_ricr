import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const post = [
    { id: 1, title: "First Post", content: "This is the First Post." },
    { id: 2, title: "Second Post", content: "This is the Second Post." },
  ];
  const isAuthenticated = true;
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog post={post} />} />
          <Route
            path="/post/:id"
            element={
              <Post post={{ title: "Sample", content: "Sample content" }} />
            }
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <nav>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              fontFamily: isActive ? "bold" : "normal",
            })}
          >
            Dashboard
          </NavLink>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div>
        <h2>Time: {seconds} Seconds</h2>;
      </div>
    </>
  );
};

export default App;
