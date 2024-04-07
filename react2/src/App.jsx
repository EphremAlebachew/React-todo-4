
import React, { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    console.log("render");
  },[todoList]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    };
    return (
        <div>
        <h2>Todo List </h2>
        <AddTodoForm addTodo={addTodo} />
       
        
      </div>
      
      );
}
export default App;