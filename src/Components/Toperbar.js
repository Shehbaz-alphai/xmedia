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
        <Link
          to="/"
          aria-current="page"
          className="brand w-nav-brand w--current"
        >
          <img
            src="/logo.png"
            loading="lazy"
            alt=""
            className="image"
          />
        </Link>
        <nav role="navigation" className="nav-menu nav_404 w-nav-menu">
          <Link to="/design" className="nav-link w-nav-link">
            Design
          </Link>
          <Link to="/branding" className="nav-link w-nav-link">
            Branding
          </Link>
          <Link to="/uiux" className="nav-link w-nav-link">
          UI UX
          </Link>
          <Link to="/development" className="nav-link w-nav-link">
            Development
          </Link>
          <Link to="/about" className="nav-link w-nav-link">
            About
          </Link>
          <Link to="/blog" className="nav-link blog_link w-nav-link">
            Blog
          </Link>
          <Link to="/contactus" className="nav-link w-nav-link">
            Contact
          </Link>
        
        </nav>
  
      </div>
    </div>
  </div>
  )
}

export default Toperbar