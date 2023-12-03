import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="dev-data">
        <time dateTime="2023-11-26">2023 </time>
        <a href="https://github.com/yburdakova" target="_blank" rel="noreferrer"> 
          <div className="git-logo"/>
          <div className="">YaBurdakova</div>
        </a>
      </div>
      <div className="rs-link">
        <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <div className="rs-logo"/>
        </a>
      </div>
    </footer>
  )
}
