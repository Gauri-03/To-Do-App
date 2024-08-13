import React from "react";

import List from "@mui/material/List";

import { Todo } from "./ToDo";
import TodoItem from "./ToDoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onUpdate,
  onEdit,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onEdit={onEdit}
        />
      ))}
    </List>
  );
};

export default TodoList;
