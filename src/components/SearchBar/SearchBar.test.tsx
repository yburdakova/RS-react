import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    it('renders with input and button, and calls onChange and onSubmit handlers', () => {
        const onSubmitMock = jest.fn();
        const onChangeMock = jest.fn();
        const value = 'Test Value';

        render(<SearchBar onSubmit={onSubmitMock} onChange={onChangeMock} value={value} />);

        const inputElement = screen.getByPlaceholderText('Search...');
        const submitButton = screen.getByRole('button', { name: '🔍' });

        expect(inputElement).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);

        fireEvent.submit(submitButton); // Используем fireEvent.submit вместо fireEvent.click
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
});