import React from 'react'
import { Link } from 'react-router-dom'

const Toperbar = () => {
  return (
    <div id="nav_id_hero" className="nav">
    <div
      data-collapse="medium"
      
      role="banner"
      className="navbar w-nav"
    >
      <div className="navbar w-container">
        <a
          href="/"
          aria-current="page"
          className="brand w-nav-brand w--current"
        >
          <img
            src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/6091286771343e4e66831f99_logo.png"
            loading="lazy"
            alt=""
            className="image"
          />
        </a>
        <nav role="navigation" className="nav-menu nav_404 w-nav-menu">
          <a href="/design" className="nav-link w-nav-link">
            Design
          </a>
          <a href="/branding" className="nav-link w-nav-link">
            Branding
          </a>
          <a href="/uiux" className="nav-link w-nav-link">
          UI UX
          </a>
          <a href="/development" className="nav-link w-nav-link">
            Development
          </a>
          <a href="/about" className="nav-link w-nav-link">
            About
          </a>
          {/* <a href="/blog" className="nav-link blog_link w-nav-link">
            Blog
          </a> */}
          <a href="/contactus" className="nav-link w-nav-link">
            Contact
          </a>
        
        </nav>
  
      </div>
    </div>
  </div>
  )
}

export default Toperbar