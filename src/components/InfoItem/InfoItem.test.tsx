import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InfoItem from './InfoItem';

describe('InfoItem Component', () => {
    it('renders with title and data', () => {
        const title = 'Test Title';
        const data = 'Test Data';

        render(<InfoItem title={title} infodata={data} />);

        const subtitle = screen.getByText(`${title}:`);
        const infoData = screen.getByText(data);

        expect(subtitle).toBeInTheDocument();
        expect(infoData).toBeInTheDocument();
    });
});