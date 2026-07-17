import React from "react";

const TodoList = ({ todos, input, onInputChange, onAddtodo, onCleartodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddtodo();
  };
  return (
    <>
      <ul>
        {todos.map((todo, idx) => {
          <li key={idx}>{todo}</li>;
        })}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Add To do"
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={onCleartodo}>Clear Todo</button>
      </div>
    </>
  );
};

export default TodoList;
