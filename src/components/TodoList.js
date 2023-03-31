import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align:center;
  background-color: #fdcb6e;
  width: 100vw;
  height:auto;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

`;



const TodoList = ({todos}) => {
    return (
        <div>
        <p>TodoList with <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
        <ul className="list-group">
        {todos.map((todo) => (
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </li>

        ))}
    </ul>
    </div>
    );
};

export default TodoList;