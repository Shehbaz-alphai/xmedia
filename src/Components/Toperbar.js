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
          <a to="/branding" className="nav-link w-nav-link">
            Branding
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
          <div className="call">
            <div className="w-embed">
              <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
              />
              <a
                className="nav-link"
                href=""
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/outcrowd-digital-agency/introduction?hide_gdpr_banner=1'});return false;"
              >
                Book a call
              </a>
            </div>
            <div className="html-embed-9 w-embed w-script">
              <script
                src="https://assets.calendly.com/assets/external/widget.js"
                type="text/javascript"
                async
              ></script>
            </div>
          </div>
        </nav>
        <div
          data-w-id="f86301bb-c74b-d083-67e5-22d30039b50f"
          className="menu-button-2 menu_button_404 w-nav-button"
        >
          <div
            data-w-id="d8623239-d84d-c73a-a9d3-9c8e439aeea2"
            data-is-ix2-target="1"
            className="button_404"
            data-animation-type="lottie"
            data-src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611a34f2eec501032ed50c65_hero_animation.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-renderer="svg"
            data-default-duration="2.566666666666667"
            data-duration="0"
          ></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Toperbar