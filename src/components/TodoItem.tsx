import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => (
    <ListItem>
        <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
        <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
               </IconButton>
    </ListItem>
);

export default TodoItem;
