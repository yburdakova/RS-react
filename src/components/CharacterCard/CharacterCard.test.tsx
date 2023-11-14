import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import '@testing-library/jest-dom';

const mockCharacterData = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    height: '172',
    mass: '77',
};

describe('CharacterCard', () => {
    it('should render the character name', () => {
        render(<CharacterCard data={mockCharacterData} />);
        const characterName = screen.getByRole('heading', { name: mockCharacterData.name });
        expect(characterName).toBeInTheDocument();
    });

    it('should render the character birth year', async () => {
        render(<CharacterCard data={mockCharacterData} />);
        await waitFor(() => {
            const birthYear = screen.getByText(/Year of birth/i);
            expect(birthYear).toBeInTheDocument();
            const nextSibling = birthYear.nextSibling;
            expect(nextSibling).not.toBeNull();
            if (nextSibling) {
                expect(nextSibling.textContent).toContain('19BBY');
            }
        });
    });
    
    it('should render the character height', async () => {
        render(<CharacterCard data={mockCharacterData} />);
        await waitFor(() => {
            const height = screen.getByText(/Height/i);
            expect(height).toBeInTheDocument();
            const nextSibling = height.nextSibling;
            expect(nextSibling).not.toBeNull();
            if (nextSibling) {
                expect(nextSibling.textContent).toContain('172');
            }
        });
    });
    
    it('should render the character mass', async () => {
        render(<CharacterCard data={mockCharacterData} />);
        await waitFor(() => {
            const mass = screen.getByText(/Weigh/i);
            expect(mass).toBeInTheDocument();
            const nextSibling = mass.nextSibling;
            expect(nextSibling).not.toBeNull();
            if (nextSibling) {
                expect(nextSibling.textContent).toContain('77');
            }
        });
    });
    
    it('should close the card when the close button is clicked', async () => {
        render(<CharacterCard data={mockCharacterData} />);
        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
        await waitFor(() => {
            const cardInfo = screen.queryByRole('div', { name: 'Character Information' });
            expect(cardInfo).not.toBeInTheDocument();
        });
    });
});
