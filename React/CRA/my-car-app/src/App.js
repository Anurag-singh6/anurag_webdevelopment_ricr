import React from "react";
import Header from "./pages/Header";
import Greating from "./pages/Greating";
import TodoList from "./pages/TodoList";
import UserProfile from "./pages/UserProfile";
import BankDetails from "./pages/BankDetails";
import ProductCard from "./pages/ProductCard";
import sofa from "../src/sofablend2.png";

const App = () => {
  const user = {
    name: "Alice",
    isActive: false,
    skills: ["React", "JavaScript", "CSS"],
  };
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
  return (
    <>
      <Header isLoggedIn={true}></Header>
      <div>My component</div>
      <Greating></Greating>
      <TodoList todos={["Learn React", "Build App"]}></TodoList>
      <UserProfile user={user}></UserProfile>
      <BankDetails userbank={userbank}></BankDetails>
      <ProductCard product={product}></ProductCard>
    </>
  );
};

export default App;
