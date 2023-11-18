import './ErrorButton.css'


function ErrorButton() {

  const handleError = () => {
    throw new Error('Test error');
  };


  return (
    <button className="error_button" type="button" onClick={handleError}>
        ERROR
      </button>
  )
}

export default ErrorButton

