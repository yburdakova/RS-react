import { Component } from 'react';
import './ErrorButton.css';
import { ErrorButtonProps } from '../../constants/interfaces';

class ErrorButton extends Component<ErrorButtonProps> {
  render() {
    const { onClick } = this.props;

    return (
      <button className="error-button" type="button" onClick={onClick}>
        ERROR
      </button>
    );
  }
}

export default ErrorButton;
