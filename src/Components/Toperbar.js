import React, { useState } from "react";
import { Link } from "react-router-dom";

const Toperbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id="nav_id_hero" className="nav">
      <div data-collapse="medium" role="banner" className="navbar w-nav">
        <div className="navbar w-container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className="mobile-screen">
            <Link
              to="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src="/logo.png"
                loading="lazy"
                alt=""
                style={{ width: "40px" }}
                className="image"
              />
            </Link>
            <button onClick={toggleMenu} className="menu-toggle">
              <div
                id="menuButton"
                class="menu-button-2 menu_button_404 w-nav-button"
                aria-label="menu"
                role="button"
                tabindex="0"
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
                style={{background:'#f6f6f6'}}
              >
                <div
                  data-w-id="d8623239-d84d-c73a-a9d3-9c8e439aeea2"
                  data-is-ix2-target="1"
                  class="button_404"
                  data-animation-type="lottie"
                  data-src="https://assets-global.website-files.com/609124aa26f8d4863c88a6d9/611a34f2eec501032ed50c65_hero_animation.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.566666666666667"
                  data-duration="0"
                >
                  <svg
                    viewBox="0 0 120 120"
                    width="120"
                    height="120"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "100%",
                      height: "100%",
                      contentVisibility: "visible",
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_2">
                        <rect width="120" height="120" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_2)">
                      <g
                        transform="matrix(1,0,0,1,1.5,91.5)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(17,17,17)"
                            stroke-opacity="1"
                            stroke-width="9"
                            d=" M4.5,4.5 C4.5,4.5 112.5,4.5 112.5,4.5"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,1.5,55.5)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(17,17,17)"
                            stroke-opacity="1"
                            stroke-width="9"
                            d=" M4.5,4.5 C4.5,4.5 112.5,4.5 112.5,4.5"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,1.5,19.5)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(17,17,17)"
                            stroke-opacity="1"
                            stroke-width="9"
                            d=" M4.5,4.5 C4.5,4.5 112.5,4.5 112.5,4.5"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <nav role="navigation" className="nav-menu nav_404 w-nav-menu " >
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
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
            style={{ height: "13016.3px", display: isMenuOpen ? "block" : "none" }}
          >
            <nav
              role="navigation"
              className={`nav-menu nav_404 w-nav-menu ${
                isMenuOpen ? "menu-open" : ""
              }`}
              style={{
                transform: isMenuOpen
                  ? "translateY(0px) translateX(0px)"
                  : "translateY(-100%)",
                transition: "transform 400ms ease 0s",
              }}
              data-nav-menu-open={isMenuOpen ? true : null}
            >
              <Link
                to="/design"
                class="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: " 980px" }} onClick={() => toggleMenu(false)}
              >
                Design
              </Link>
              <Link
                to="/branding"
                aria-current="page" onClick={() => toggleMenu(false)}
                class="nav-link w-nav-link w--current w--nav-link-open"
                style={{ maxWidth: " 980px" }}
              >
                Branding
              </Link>
              <Link to="/uiux" className="nav-link w-nav-link w--nav-link-open" onClick={() => toggleMenu(false)}>
                UI UX
              </Link>
              <Link
                to="/development" onClick={() => toggleMenu(false)}
                className="nav-link w-nav-link w--nav-link-open"
              >
                Development
              </Link>
              <Link
                to="/about"
                className="nav-link w-nav-link w--nav-link-open" onClick={() => toggleMenu(false)}
              >
                About
              </Link>
              <Link to="/blog" className="nav-link w-nav-link w--nav-link-open" onClick={() => toggleMenu(false)}>
                Blog
              </Link>
              <Link
                to="/contactus"
                className="nav-link w-nav-link w--nav-link-open"  onClick={() => toggleMenu(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toperbar;
