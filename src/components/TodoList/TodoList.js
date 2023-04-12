import React from "react";




const TodoList = ({todos}) => {
    return (
        <div>
        <p>TodoList with <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
        <ul className="list-group">
        {todos.map((todo) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </li>

        ))}
    </ul>
    </div>
    );
};

export default TodoList;