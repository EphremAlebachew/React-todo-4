import React from "react";

function TodoList(props) {
  const { todoList } = props;

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;