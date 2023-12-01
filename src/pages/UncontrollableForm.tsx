import React from 'react'
import { Link } from 'react-router-dom'

export const UncontrollableForm = () => {
  return (
    <div className="form-container">
      <button>
        <Link to="/">Back to Home</Link>
      </button>
      <form>
        <h2><span className='accent'>Un</span>Controllable Form</h2>
        <br />
        <label>Name: <input name="name" type="text"/></label>
        <br />
        <label>Email: <input name="email" type="email"/></label>
        <br />
        <label>Password: <input name="password" type="password"/></label>
        <br />
        <label>Re-enter Password: <input name="password" type="password"/></label>
        <br />
        <fieldset name='Gender'>
          <label>
            <input type="radio" name="os" value="linux"/>
            Femail
          </label>
          <label>
            <input type="radio" name="os" value="linux"/>
            Mail
          </label>
        </fieldset>
        
        
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
