import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Array<{ id: number; text: string; completed: boolean }>;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => (
    <List>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
    </List>
);

export default TodoList;
