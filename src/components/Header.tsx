import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled form</Link>
          </li>
          <li>
            <Link to="/controlled-form">Controlled form</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
