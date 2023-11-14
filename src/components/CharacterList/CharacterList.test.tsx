import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SearchContext } from '../../context/dataContext';
import CharacterList from './CharacterList';
import { fetchPeople } from '../../api/api';
import { SearchContextData, CharacterProps } from '../../constants/interfaces';

jest.mock('../../api/api', () => ({
    fetchPeople: jest.fn(),
}));

const mockCharacterProps: CharacterProps = {
    name: 'Luke Skywalker',
    url: 'https://example.com/luke',
};

const mockInfoData: CharacterProps[][] = [
  [mockCharacterProps],
];

describe('CharacterList Component', () => {
    it('renders character list and detail', async () => {
        const searchContextData: SearchContextData = {
        infoData: mockInfoData,
        searchRequest: '',
        };

        render(
            <BrowserRouter>
                <SearchContext.Provider value={searchContextData}>
                <CharacterList first={true} />
                </SearchContext.Provider>
            </BrowserRouter>
        );

        const listItem = screen.getByText('Luke Skywalker');
        expect(listItem).toBeInTheDocument();

        userEvent.click(listItem);

        (fetchPeople as jest.Mock).mockResolvedValueOnce(mockCharacterProps);

        await waitFor(async () => {
            expect(await screen.findByText('Luke Skywalker')).toBeInTheDocument();
            expect(fetchPeople).toHaveBeenCalledTimes(1);
            expect(fetchPeople).toHaveBeenCalledWith(mockCharacterProps.url);
        });

        expect(screen.queryByTestId('loader')).toBeNull();
    });
});
