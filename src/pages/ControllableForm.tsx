import { Link } from "react-router-dom"

export const ControllableForm = () => {
  return (
    <div className="form-container">
      <button>
          <Link to="/">Back to Home</Link>
      </button>
      <form>
        <h2>Controllable Form</h2>
        <br />

        <input placeholder="email" type="email" required />
        <br />

        <input
          placeholder="password"
          type="password"
          required
        />
        <br />

        <button type="submit">Sign in</button>
      </form>
    </div>

  )
}
