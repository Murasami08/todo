import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders ToDo input and list', () => {
    render(<App />);
    
    const inputElement = screen.getByLabelText(/new task/i);
    const buttonElement = screen.getByRole('button', { name: /add/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(buttonElement);

    expect(screen.getByText(/new task/i)).toBeInTheDocument();
});
