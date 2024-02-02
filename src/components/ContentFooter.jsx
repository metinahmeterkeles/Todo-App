import React from "react";
import { useTodo } from "../contexts/TodoContext";

const ContentFooter = () => {
  const { todos, setTodos, filter, setFilter } = useTodo();

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todos.filter((todo) => todo.completed === false).length}{" "}
        </strong>
        item{todos.filter((todo) => todo.completed === false).length > 1 && "s"}{" "}
        left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "All" ? "selected" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === "Active" ? "selected" : ""}
            onClick={() => setFilter("Active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === "Completed" ? "selected" : ""}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
