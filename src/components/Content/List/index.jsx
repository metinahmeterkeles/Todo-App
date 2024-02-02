import React from "react";
import { useTodo } from "../../../contexts/TodoContext";
import ListItem from "./ListItem";

const List = () => {
  const { todos, filter } = useTodo();

  let filtered = todos;

  if (filter !== "All") {
    filtered = todos.filter((todo) =>
      filter === "Active" ? todo.completed === false : todo.completed === true,
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default List;
