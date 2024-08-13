import "../App.css";

import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <TextField
        required
        label="Enter task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <Button type="submit" variant="contained" color="success">
        Add Task
      </Button>
    </form>
  );
};

export default TodoForm;

//settextist{[---textlist], task]}
//window.localstorage.setitem("textlist", json.stringify([---textList, task]))
