import { useState } from "react";
import "./App.css";
import NewTodos from "./components/NewTodos";
import Todos from "./components/Todos";
import { TodoContextProcider } from "./store/todos-context";

function App() {
  return (
    <TodoContextProcider>
      <NewTodos />
      <Todos />
    </TodoContextProcider>
  );
}

export default App;
