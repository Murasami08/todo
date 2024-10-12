import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddClick = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <TextField 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                label="New Task" 
                variant="outlined" 
            />
            <Button onClick={handleAddClick} variant="contained" className='btn'>Добавить</Button>
        </div>
    );
};

export default TodoInput;
