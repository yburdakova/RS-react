import './ErrorButton.css'
import { ErrorButtonProps } from '../../constants/interfaces';

function ErrorButton({ onClick }:ErrorButtonProps) {
  return (
    <button className="error_button" type="button" onClick={onClick}>
        ERROR
      </button>
  )
}

export default ErrorButton

