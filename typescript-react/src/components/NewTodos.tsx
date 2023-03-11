import React, { useRef, useContext } from "react";
import classes from "./NewTodos.module.css";
import { TodoContext } from "../store/todos-context";

const NewTodos: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoTextInputRef.current!.value = "";

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo 입력</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>추가</button>
    </form>
  );
};

export default NewTodos;
