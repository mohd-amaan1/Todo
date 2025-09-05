import { useState } from "react";
import {CreateTodo} from "./components/createTodo";
import Todos from "./components/todos";
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const data = await res.json();
      setTodo(data.todos);
    })
  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos = {todo} />
      </div>
    </>
  );
}

export default App;
