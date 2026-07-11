import React from "react";
import Header from "./pages/Header";
import Greating from "./pages/Greating";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <>
    <Header isLoggedIn={true}></Header>
    <div>My component</div>
    <Greating></Greating>
    <TodoList todos={['Learn React', 'Build App']}></TodoList>
    </>
  )
}

export default App