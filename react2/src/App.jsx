
import React, { useState } from 'react';
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import TodoList from "./TodoList/TodoList"
function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    };
    return (
        <div>
        <h2>Todo List</h2>
        <TodoList todoList={todoList} />
        
        <AddTodoForm onAddTodo={addTodo} />
      </div>
      
      );
}
export default App;