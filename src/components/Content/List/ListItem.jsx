import React from "react";
import { useTodo } from "../../../contexts/TodoContext";

const ListItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodo();

  function onChange(id) {
    toggleTodo(id);
  }

  function onDestroy(id) {
    deleteTodo(id);
  }

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
      </div>
    </li>
  );
};

export default ListItem;
