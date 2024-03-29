import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
  ]);
  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);
  };

  const toggleTodo = (id) => {
    const compiedTodos = [...todos];
    const itemIndex = compiedTodos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;

    setTodos(compiedTodos);
  };

  const deleteTodo = (id) => {
    // let compiedTodos = [...todos];

    // const itemIndex = compiedTodos.findIndex((todo) => todo.id === id);
    // const item = todos[itemIndex];
    // compiedTodos = todos.filter((todo) => todo.id !== item.id);
    const compiedTodos = [...todos];
    const itemIndex = compiedTodos.findIndex((todo) => todo.id === id);

    compiedTodos.splice(itemIndex, 1);

    setTodos(compiedTodos);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error(
      "useTodo hook must be call inside Todo Provider component ",
    );
  }
  return context;
};
