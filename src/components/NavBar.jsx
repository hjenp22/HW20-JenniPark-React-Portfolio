import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/NavBar.css"; //this wont thread

export default function NavBar() {
  //state management
  const [toggleCollapsed, settoggleCollapsed] = useState(true);
  //event handler for toggling the collapse state
  const handleToggleClick = () => {
    settoggleCollapsed(!toggleCollapsed);
  };
  //event handler for collapsing the menu when a link is clicked
  const handleLinkClick = () => {
    //setting the togglecollapsed to true which allows the collapsing of the menu
    settoggleCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container max-width-container">
        {/* Brand link */}
        <Link to="/" className="navbar-brand">
          Jenni Park
        </Link>
        <button
          className={`navbar-toggler ${toggleCollapsed ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!toggleCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggleClick} // Event handler for toggle button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links */}
        <div
          className={`collapse navbar-collapse ${
            toggleCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {/* Each link with click event handler */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link" onClick={handleLinkClick}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
