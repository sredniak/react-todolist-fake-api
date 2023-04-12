import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import axios from "axios";
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => { 
      
    setTodos(result.data);
  
  });

  }, []); //pusta tablica na koncu zeby nie zapetlic


  return <div> {todos ? <TodoList todos={todos} /> : <Loading />}</div>;
}

export default App;
