import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorButton from './ErrorButton';

describe('ErrorButton Component', () => {
    it('renders button correctly', () => {
        render(<ErrorButton onClick={() => {}} />);
        const errorButton = screen.getByRole('button', { name: /error/i }) as HTMLButtonElement;
        expect(errorButton).toBeTruthy(); // Используем toBeTruthy вместо toBeInTheDocument
    });
});