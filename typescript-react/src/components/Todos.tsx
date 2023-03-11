import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.list}>
      {todoCtx.items.map(item => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
