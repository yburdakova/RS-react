import React from 'react'
import { useAppSelector } from '../hooks/redux';
import { Link } from 'react-router-dom';

export const NoPage = () => {

  const {error} = useAppSelector(state => state.userReducer);

  return (
    <div className="nopage">
      <div className='nopage-container'>
        <div >
          <p>This page does not exist!</p>
          {error}
        </div>
        <button>
          <Link to="/">Сome Back Home</Link>
        </button>
      </div>
    </div>
  )
}
