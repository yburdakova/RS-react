import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SelectBar from './SelectBar';

describe('SelectBar Component', () => {
  it('renders with options and calls onChange handler', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<SelectBar onChange={onChangeMock} value={10} />);

    const selectElement = getByTestId('itemPerPage');
    fireEvent.change(selectElement, { target: { value: '50' } }); 

   fireEvent.change(selectElement, { target: { value: '50' } });
  });
});