import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import './App.css'
const App: React.FC = () => {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

    const activeTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <Container>
            <Typography variant="h4">ToDo List</Typography>
            <TodoInput addTodo={addTodo} />
           
            <Typography variant="h6">Активные задачи</Typography>
            <TodoList todos={activeTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            <Typography variant="h6">Выполненные задачи</Typography>
            <TodoList todos={completedTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
   
        </Container>
    );
};

export default App;
