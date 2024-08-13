import "./App.css";

import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import { Todo } from "./ToDo";

const App: React.FC = () => {
  const localStorageTodos = window.localStorage.getItem("todos");
  let defaultTextList: string[];
  if (localStorageTodos) {
    defaultTextList = JSON.parse(localStorageTodos);
  } else {
    window.localStorage.setItem("todos", JSON.stringify([]));
    defaultTextList = [];
  }
  const [todos, setTodos] = useState<Todo[]>(defaultTextList);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <Container maxWidth="sm" className="todo-box">
        <Typography variant="h3" component="h1" gutterBottom>
          Todo App
        </Typography>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
          onEdit={editTodo}
        />
      </Container>
    </div>
  );
};

export default App;
