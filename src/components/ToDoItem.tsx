import "../App.css";

import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Todo } from "./ToDo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onUpdate,
  onEdit,
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleConfirmDelete = () => {
    onDelete(todo.id);
    setOpenDelete(false);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setOpenEdit(false);
    }
  };

  return (
    <>
      <ListItem>
        <Checkbox
          edge="start"
          checked={todo.completed}
          onChange={() => onUpdate(todo.id)}
        />
        {openEdit ? (
          <form onSubmit={handleSubmitEdit}>
            <TextField
              autoFocus
              margin="dense"
              label="Task"
              type="text"
              fullWidth
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <Button type="submit" variant="contained" color="success">
              Save Task
            </Button>
          </form>
        ) : (
          <ListItemText
            primary={
              <Typography
                variant="body1"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </Typography>
            }
          />
        )}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="done"
            onClick={() => onUpdate(todo.id)}
          >
            <DoneAllIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this task?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="success">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoItem;
