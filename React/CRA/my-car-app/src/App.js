import React from "react";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Greating from "./pages/Greating";
import TodoList from "./pages/TodoList";
import UserProfile from "./pages/UserProfile";
import BankDetails from "./pages/BankDetails";
import ProductCard from "./pages/ProductCard";
import sofa from "../src/sofablend2.png";
import Users from "./pages/Users";
import UserProfile2 from "./pages/UserProfile2";

const App = () => {
  const user = {
    name: "Alice",
    isActive: false,
    skills: ["React", "JavaScript", "CSS"],
  };
  const user2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const userbank = {
    acc: 48575847,
    iface: "BOB90938",
    isActive: true,
    name: "Luis Fonsi",
    bank: "Bank of Boroda",
    balance: 7890000,
    NOM: ["Alin", "Magreta", "Luke"],
  };
  const product = {
    name: "Sofa",
    price: 8000,
    image: sofa,
    inStock: true,
    tag: ["portable", "furniture"],
  };
  const Actionhandled = () => {
    alert("Action Triggered..!");
  };

  const handleInputChange = (value) => {
    console.log("Input changed: ", value);
  };
  const handleAddtodo = () => {
    console.log("Todo Added");
  };
  const handleCleartodo = () => {
    console.log("todo cleared");
  };
  const handleToggle = () => {
    console.log("togle visiblity...!");
  };

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={true}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Users users={user2} />} />
          <Route path="/user/:id" element={<UserProfile2 userId="User ID"/>} />
        </Routes>
      </BrowserRouter>
      <div>My component</div>
      <Greating></Greating>
      <TodoList
        todos={["Learn React", "Build App"]}
        input=""
        onInputChange={handleInputChange}
        onAddtodo={handleAddtodo}
        onCleartodo={handleCleartodo}
      ></TodoList>
      <UserProfile user={user}></UserProfile>
      <BankDetails
        userbank={userbank}
        isvisible={true}
        ontoggled={handleToggle}
      ></BankDetails>
      <ProductCard
        product={product}
        label="Perform Action"
        onAction={Actionhandled}
      ></ProductCard>
    </>
  );
};

export default App;
