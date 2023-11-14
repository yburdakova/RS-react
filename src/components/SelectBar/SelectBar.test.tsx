import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SelectBar from './SelectBar';

describe('SelectBar Component', () => {
    it('renders with options and calls onChange handler', () => {
      // Arrange
      const onChangeMock = jest.fn();
      const { getByLabelText } = render(<SelectBar onChange={onChangeMock} value={10} />);
  
      // Act
      const selectElement = getByLabelText('Number of items shown per page:');
  
      // Assert
      fireEvent.change(selectElement, { target: { value: 50 } });
      expect(onChangeMock).toHaveBeenCalledWith(50);
    });
  });
