import './ErrorButton.css'
import { ErrorButtonProps } from '../../types/interfaces';

function ErrorButton({ onClick }:ErrorButtonProps) {
  return (
    <button className="error_button" type="button" onClick={onClick}>
        ERROR
      </button>
  )
}

export default ErrorButton

