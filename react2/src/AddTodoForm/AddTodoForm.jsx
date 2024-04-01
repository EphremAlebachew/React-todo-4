import React, { useState } from 'react';
function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("")
    const handleTitleChange = (event) => {

        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    
    };
    const handleAddTodo = () => {
        onAddTodo(todoTitle);
        setTodoTitle('');
    };
    return (
        <div>
            <input type="text" placeholder="Enter Todo" value={todoTitle} onChange={handleTitleChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );

}
export default AddTodoForm;