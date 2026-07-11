import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, idx) => {
          <li key={idx}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
