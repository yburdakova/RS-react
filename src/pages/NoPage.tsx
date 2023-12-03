import React from 'react'
import { Link } from 'react-router-dom';

export const NoPage = () => {



  return (
    <div className="nopage">
      <div className='nopage-container'>
        <div >
          <p>This page does not exist!</p>
        </div>
        <button>
          <Link to="/">Come Back Home</Link>
        </button>
      </div>
    </div>
  )
}
