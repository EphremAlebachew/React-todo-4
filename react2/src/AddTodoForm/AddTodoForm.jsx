import React, { useState } from 'react';
function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
    };
    const handleAddTodo = () => {
        const id = Date.now();
        const newTodo = {
            title: todoTitle,
            id: id
        };
        onAddTodo(newTodo);
        setTodoTitle("");
    };
 
    return (
        <div>
            <input type="text"  value={todoTitle} onChange={handleTitleChange} />
            <button onClick={handleAddTodo}>Add </button>
            <li>item 1</li>
        </div>
        
    );

}
export default AddTodoForm;