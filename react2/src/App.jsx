
import React, { useState } from 'react';
import TodoList from "./TodoList/TodoList"
function App() {
    const [todoList, setTodoList] = useState([]);
    return (
        <div>
         
          <TodoList todoList={todoList} />
      </div>
      
      );
}
export default App;